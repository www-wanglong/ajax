import TodoCompleted from './TodoCompleted'
import TodoRemove from './TodoRemove'
import TodoEditing from './TodoEditing'
import Editing  from './Editing'
import { observer } from "mobx-react-lite"
import classnames from 'classnames'

function Todo ({ todo }) {
  return (
    <li className={
      classnames({
        completed: todo.isCompleted,
        editing: todo.isEditing
      })
    }>
      <div className="view">
        <TodoCompleted todo={todo} />
        <TodoEditing todo={todo} />
        <TodoRemove id={todo.id} />
      </div>
      <Editing todo={todo} />
    </li>
  )
}

export default observer(Todo)