const CreateTaskQueue = () => {
  const taskQueue = []
  return {
    push: item => taskQueue.push(item),
    pop: () => taskQueue.shift(),
    /**
     * 判断任务队列中是否有任务
     */
    isEmpty: () => taskQueue.length === 0
  }
}

export default CreateTaskQueue