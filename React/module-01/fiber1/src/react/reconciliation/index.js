import {
  arrified,
  createTaskQueue,
  createStateNode,
  getTag
} from '../misc'

const taskQueue = createTaskQueue()
let subTask = null

let pendingCommit = null

const commitAllWork = rootTiber => {
  rootTiber.effects.forEach(item => {
    if (item.effectTag === 'placement') {
      let fiber = item
      let parentFiber = item.parent
      while (parentFiber.tag === 'class_component') {
        parentFiber = parentFiber.parent
      }

      if (fiber.tag === 'host_component') {
        parentFiber.stateNode.appendChild(fiber.stateNode)
      }

    }
  })
}

/**
 * 获取任务
 */
const getFirstTask = () => {
  const task = taskQueue.pop()

  // 返回最外层节点的fiber对象
  return {
    props: task.props,
    stateNode: task.dom,
    tag: 'host_root',
    effects: [],
    child: null,
  }

}


const reconcileChildren = (fiber, children) => {
  // children可能是对象 也可能是数组
  const arrifiedChildren = arrified(children)

  let index = 0
  let numberOfElements = arrifiedChildren.length

  let vElement = null
  let newFiber = null
  let prevFiber = null

  while (index < numberOfElements) {
    vElement = arrifiedChildren[index]
    newFiber = {
      type: vElement.type,
      props: vElement.props,
      tag: getTag(vElement),
      effects: [],
      effectTag: 'placement',
      parent: fiber,
    }

    newFiber.stateNode = createStateNode(newFiber)

    if (index === 0) {
      fiber.child = newFiber
    } else {
      prevFiber.sibling = newFiber
    }

    prevFiber = newFiber

    index++
  }
}
const executeTask = (fiber) => {

  if (fiber.tag === 'class_component') {
    reconcileChildren(fiber, fiber.stateNode.render())
  } else {
    reconcileChildren(fiber, fiber.props.children)
  }


  if (fiber.child) {
    return fiber.child
  }

  let currentExecuteFiber = fiber

  // 退回到父级
  while (currentExecuteFiber.parent) {
    currentExecuteFiber.parent.effects = currentExecuteFiber.parent.effects.concat(
      currentExecuteFiber.effects.concat([currentExecuteFiber])
    )
    if (currentExecuteFiber.sibling) {
      return currentExecuteFiber.sibling
    }
    currentExecuteFiber = currentExecuteFiber.parent
  }

  pendingCommit = currentExecuteFiber

}

/**
 * 执行任务
 * @param {*} deadline
 */
const workLoop = deadline => {
  // 如果子任务不存在 获取子任务
  if (!subTask) {
    subTask = getFirstTask()
  }

  // 如果任务存在
  while (subTask && deadline.timeRemaining() > 1) {
    // 执行任务
    subTask = executeTask(subTask)
  }

  // 第二阶段
  if (pendingCommit) {
    commitAllWork(pendingCommit)
  }
}

/**
 * 负责调度任务
 * @param {*} deadline
 */
const performTask = deadline => {
  workLoop(deadline)

  /**
   * 判断任务是否存在，判断任务队列中是否还有任务
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
  taskQueue.push({
    dom,
    props: {
      children: element
    }
  })

  /**
   * 指定浏览器空闲时间 执行任务
   */
  requestIdleCallback(performTask)

}