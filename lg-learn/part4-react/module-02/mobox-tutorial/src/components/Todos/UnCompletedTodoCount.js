import { observer } from "mobx-react-lite"
import { useRootStore } from '../../store'

function UnCompletedTodoCount () {
  const { todoStore: { unCompletedTodosCount } } = useRootStore()
  return (
    <span className="todo-count">
      <strong>{unCompletedTodosCount}</strong>item left
    </span>
  )
}

export default observer(UnCompletedTodoCount)