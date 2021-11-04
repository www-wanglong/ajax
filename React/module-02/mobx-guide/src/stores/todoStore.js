import {
  action,
  computed,
  observable
} from 'mobx'

class TodoStore {

  // observable可观测的
  @observable todos = []
  // 筛选条件
  @observable filter = 'All'

  // 添加任务
  @action.bound todoAdd(taskName) {
    this.todos.push({
      taskName,
      isCompleted: false
    })
  }

  // 删除任务
  @action.bound todoDelete(index) {
    this.todos.splice(index, 1)
  }

  // 更改任务状态
  @action.bound changeCompleted(index, flag) {
    this.todos[index].isCompleted = flag
  }

  // 计算的值 未完成的任务
  @computed get unFinishedTodoCount() {
    return this.todos.filter( todo => !todo.isCompleted ).length
  }

  // 更改筛选条件
  @action.bound changeFilter(condition) {
    this.filter = condition
  }

  // 返回筛选条件的任务
  @computed get filterTodo() {
    switch (this.filter) {
      case 'Active':
        return this.todos.filter( todo => !todo.isCompleted )
      case 'Completed':
        return this.todos.filter( todo => todo.isCompleted )
      default:
        return this.todos
    }
  }

  //清除全部完成的
  @action.bound clearCompleted() {
    this.todos = this.todos.filter( todo => !todo.isCompleted )
  }

}

const todo = new TodoStore()

export default todo