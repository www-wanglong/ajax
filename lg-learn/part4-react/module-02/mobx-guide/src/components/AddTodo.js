import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('todo') // 让组件拥有从对象中获取状态的能力
@observer // todo变化时 更新组件的视图
class AddTodo extends Component {

  // 添加任务
  addTodo (event) {
    const { todoAdd } = this.props.todo
    if (event.key === 'Enter') {
      // 获取用户文本框中输入的内容
      const taskName = event.target.value
      // 判断是否输入内容
      if (taskName.trim().length === 0) {
        return
      }

      //将任务添加到store
      todoAdd(taskName)

      // 清空文本框内容
      event.target.value = ''
    }
  }

  render() {
    return (
      <header className="header">
				<h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onKeyUp={this.addTodo.bind(this)}
        />
			</header>
    )
  }

}

export default AddTodo