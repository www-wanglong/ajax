import { createTaskQueue } from '../misc'

const taskQueue = createTaskQueue()
let subTask = null

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

const executeTask = (fiber) => {

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
  console.log('subTask', subTask)

  // 如果任务存在
  while (subTask && deadline.timeRemaining() > 1) {
    // 执行任务
    subTask = executeTask(subTask)
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