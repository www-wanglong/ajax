import React, { Component } from "react";
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoExtra from './TodoExtra'

class App extends Component {

  render() {
    return (
      <section className="todoapp">
        <AddTodo />
        <TodoList />
        <TodoExtra />
      </section>
    )
  }
}

export default App