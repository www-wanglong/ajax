import { makeObservable, observable, action, flow, computed } from 'mobx'
import Todo from './Todo'
import axios from 'axios'

export default class TodoStore {

  constructor() {

    this.todos = []
    this.filterCondition = 'all'

    // 标记状态
    makeObservable(this, {
      todos: observable,
      addTodo: action.bound,
      loadTodos: flow,
      removeTodo: action.bound,
      unCompletedTodosCount: computed,
      filterCondition: observable,
      changeFilterCondition: action.bound,
      filterTodos: computed,
      clearCompletedTodos: action.bound,
    })

    this.loadTodos()

  }

  *loadTodos() {
    let response = yield axios.get('http://localhost:3001/todos')
    response.data.forEach(todo =>this.todos.push(new Todo(todo)))
  }

  addTodo(title) {
    this.todos.push(new Todo({
      id: this.createId(),
      title
    }))
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  /**
   * 创建ID
   */
  createId() {
    if (!this.todos.length) {
      return 1
    }

    return this.todos.reduce((id, todo) => ( id > todo.id ? id : todo.id ), 0) + 1
  }

  get unCompletedTodosCount() {
    return this.todos.filter(todo => !todo.isCompleted).length
  }

  changeFilterCondition(condition) {
    this.filterCondition = condition
  }

  get filterTodos() {
    switch (this.filterCondition) {
      case 'active':
        return this.todos.filter( todo => !todo.isCompleted )
      case 'completed':
        return this.todos.filter( todo => todo.isCompleted )
      default:
        return this.todos
    }
  }

  clearCompletedTodos() {
    this.todos = this.todos.filter( todo => !todo.isCompleted )
  }
}