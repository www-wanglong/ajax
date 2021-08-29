import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, loadTodos, selectTodos } from '../../store/todos.slice'

function Main() {
  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)
  useEffect(() => {
    dispatch(loadTodos('http://localhost:3001/todos'))
  }, [])
  return (
    <section className="main">
      <button onClick={() =>
        dispatch(addTodo({title: '测试'}))
      }>
        添加任务
      </button>
      <ul className="todo-list">
        {todos.map((todo,index) => (
          <li key={index}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{todo.title}</label>
              <button className="destroy" />
            </div>
            <input className="edit" />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Main