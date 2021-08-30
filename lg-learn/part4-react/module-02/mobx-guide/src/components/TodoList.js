import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('todo') // 让组件拥有从对象中获取状态的能力
@observer // todo变化时 更新组件的视图
class TodoList extends Component {

  render() {
    const { filterTodo, todoDelete, changeCompleted } = this.props.todo
    return (
      <section className="main">
				<input className="toggle-all" type="checkbox" />
				<ul className="todo-list">
          {
            filterTodo.map( (todo, index) => (
              <li key={index} className={todo.isCompleted ? 'completed' : '' }>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={(e) => changeCompleted(index, e.target.checked)}
                  />
                    <label>{todo.taskName}</label>
                  <button className="destroy" onClick={() => todoDelete(index)}></button>
                </div>
                <input className="edit" />
              </li>
            ))
          }
				</ul>
			</section>
    )
  }

}

export default TodoList