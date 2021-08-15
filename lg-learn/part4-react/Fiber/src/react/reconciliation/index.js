import updateNodElement from '../DOM/updateNodeElement'
import { createTaskQueue, arrified, createStateNode, getTag, getRoot } from '../Misc'

const taskQueue = createTaskQueue()
let subTask = null
let pendingCommit = null

const commitAllWork = fiber => {
  /**
   * 循环 effects 数组 构建DOM节点树
   */
  fiber.effects.forEach( item => {
    /**
     * 类组件
     */
    if (item.tag === 'class_component') {
      /**
       * 组件的实例对象 备份
       */
      item.stateNode.__fiber = item
    }

    if (item.effectTag === 'placement') { //追加节点
      let fiber = item
      let parentFiber = item.parent

      while (parentFiber.tag === 'class_component' || parentFiber.tag === 'function_component') { //类组件不能直接渲染
        parentFiber = parentFiber.parent
      }

      if (fiber.tag === 'host_component') {
        parentFiber.stateNode.appendChild(fiber.stateNode)
      }
    } else if (item.effectTag === 'update') {
      /**
       * 更新节点
       */
      if (item.type === item.alternate.type) {
        /**
         * 节点类型相同 更新节点
         */
        updateNodElement(item.stateNode, item, item.alternate)
      } else {
        /**
         * 节点类型不同 替换节点
         */
        item.parent.stateNode.replaceChild(
          item.stateNode,
          item.alternate.stateNode
        )
      }
    } else if (item.effectTag === 'delete') {
      /**
       * 删除操作
       */
      item.parent.stateNode.removeChild(item.stateNode)
    }
  })

  // 备份旧的fiber对象
  fiber.stateNode.__rootFiberContainer = fiber
}

const getFirstTask = () => {
  /**
   * 从任务队列中获取任务
   */
  const task = taskQueue.pop()

  /**
   * 组件更新任务
   */
  if (task.from === 'class_component') {
    const root = getRoot(task.instance)
    task.instance.__fiber.partialState = task.partialState
    return {
      props: root.props,
      stateNode: root.stateNode,
      tag: 'host_root',
      effects: [],
      child: null,
      alternate: root
    }
  }
  /**
   * 返回最外层节点的fiber对象
   */
  return {
    props: task.props,
    stateNode: task.dom,
    tag: 'host_root',
    effects: [],
    child: null,
    alternate: task.dom.__rootFiberContainer // 存储备份节点
  }

}

const reconcileChildren = (fiber, children) => {
  /**
   * children可能是 对象 也可能是数组
   */

  const arrifiedChildren = arrified(children)

  let index = 0
  let numberOfElements = arrifiedChildren.length
  let element = null
  /**
   * 子级 fiber 对象
   */
  let newFiber = null
  /**
   * 上一个兄弟 fiber对象
   */
  let pervFiber = null

  /**
   * 备份的节点
   */
  let alternate = null

  /**
   * 获取子节点对应的备份节点
   */
  if (fiber.alternate && fiber.alternate.child) {
    alternate = fiber.alternate.child
  }

  while (index < numberOfElements || alternate) {
    /**
     * 子级virtualDOM对象
     */
    element = arrifiedChildren[index]

    if (element && !alternate) {
      /**
       * 初始渲染
       */
      newFiber = {
        type: element.type,
        props: element.props,
        tag: getTag(element), //获取子节点的tag
        effects: [],
        effectTag: 'placement',
        parent: fiber,
      }

      // dom节点 | 组件的实例对象
      newFiber.stateNode = createStateNode(newFiber)
    } else if (element && alternate) {
      /**
       * 更新
       */
      newFiber = {
        type: element.type,
        props: element.props,
        tag: getTag(element), //获取子节点的tag
        effects: [],
        effectTag: 'update',
        parent: fiber,
        alternate //存储旧节点
      }


      if (element.type === alternate.type) {
        /**
         * 类型相同
         */
        newFiber.stateNode = alternate.stateNode
      } else {
        /**
         * 类型不同
         */
        newFiber.stateNode = createStateNode(newFiber)
      }


    } else if (!element && alternate) {
      /**
       * 删除操作
       */
      alternate.effectTag = 'delete'
      //
      fiber.effects.push(alternate)
    }


    if (index === 0) { //第一个节点是 child
      fiber.child = newFiber
    } else if (element) {
      pervFiber.sibling = newFiber // 是上一个节点的兄弟
    }

    //更新备份节点
    if (alternate && alternate.sibling) {
      alternate = alternate.sibling
    } else {
      alternate= null
    }

    // 更新
    pervFiber = newFiber

    index++
  }
}

const executeTask = fiber => {
  /**
   * 创建子级fiber对象
   */
  if (fiber.tag === 'class_component') {

    if (fiber.stateNode.__fiber && fiber.stateNode.__fiber.partialState) {
      fiber.stateNode.state = {
        ...fiber.stateNode.state,
        ...fiber.stateNode.__fiber.partialState
      }
    }

    reconcileChildren(fiber, fiber.stateNode.render())
  } else if (fiber.tag === 'function_component') {
    reconcileChildren(fiber, fiber.stateNode(fiber.props))
  } else {
    reconcileChildren(fiber, fiber.props.children)
  }
  if (fiber.child) {
    return fiber.child
  }

  let currentExecutedFiber = fiber

  while (currentExecutedFiber.parent) {
    // 合并effects
    currentExecutedFiber.parent.effects = currentExecutedFiber.parent.effects.concat(
      currentExecutedFiber.effects.concat([currentExecutedFiber])
    )
    if (currentExecutedFiber.sibling) {
      return currentExecutedFiber.sibling
    }
    currentExecutedFiber = currentExecutedFiber.parent

  }
  pendingCommit = currentExecutedFiber
}

const workLoop = deadline => {

  // 获取子任务
  if (!subTask) {
    subTask = getFirstTask()
  }

  // 任务存在 并且浏览器有空余时间
  while (subTask && deadline.timeRemaining() > 1) {
    subTask = executeTask(subTask)
  }

  if (pendingCommit) {
    // 2. 执行第二阶段的方法
    commitAllWork(pendingCommit)
  }

}

const performTask = deadline => {

  workLoop(deadline)
  /**
   * 判断任务是否存在
   * 判断任务队列中是否还有任务
   * 再一次告诉浏览器在空闲时间执行任务
   */
  if (subTask || !taskQueue.isEmpty()) {
    requestIdleCallback(performTask)
  }

}

export const render = (element, dom) => {
  /**
   * 1. 向任务队列中添加任务
   * 2. 指定在浏览器空闲时执行任务
   */

   /**
    * 任务就是通过vdom 对象构建 fiber对象
    */
  taskQueue.push({
    dom,
    props: { children: element }
  })

  /**
   * 指定浏览器空闲时间执行任务
   */
  requestIdleCallback(performTask)

}

export const scheduleUpdate = (instance, partialState) => {
  /**
   * 把任务添加到任务队列中
   */
  taskQueue.push({
    from: 'class_component',
    instance,
    partialState
  })

  requestIdleCallback(performTask)
}