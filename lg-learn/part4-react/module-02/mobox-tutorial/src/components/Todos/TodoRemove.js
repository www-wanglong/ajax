import { useRootStore } from '../../store'

function RemoveTodo ({ id }) {
  const { todoStore: { removeTodo } } = useRootStore()
  return <button className="destroy" onClick={() => {removeTodo(id)}}></button>
}

export default RemoveTodo