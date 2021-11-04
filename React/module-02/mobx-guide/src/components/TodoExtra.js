import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('todo') // 让组件拥有从对象中获取状态的能力
@observer // todo变化时 更新组件的视图
class TodoExtra extends Component {

  render() {
    const { unFinishedTodoCount, filter, changeFilter, clearCompleted } = this.props.todo
    return (
      <footer className="footer">
        <span className="todo-count"><strong>{unFinishedTodoCount}</strong> item left</span>
        <ul className="filters">
          {
            ['All', 'Active', 'Completed'].map( (item, index) => (
              <li key={index}>
                <button className={filter === item ? 'selected' : ''} onClick={() => changeFilter(item)}>{item}</button>
              </li>
            ))
          }

        </ul>

        <button onClick={clearCompleted} className="clear-completed">Clear completed</button>
      </footer>
    )
  }

}

export default TodoExtra