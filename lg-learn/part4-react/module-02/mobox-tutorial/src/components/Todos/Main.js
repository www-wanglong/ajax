import { useRootStore } from '../../store'
import Todo from './Todo'
import Footer from './Footer'
import { observer } from "mobx-react-lite"

function Main () {
  const { todoStore: { filterTodos } } = useRootStore()
  return (
    <section className="main">
      <ul className="todo-list">
        {
          filterTodos.map( (todo,index) => <Todo todo={todo} key={index} />)
        }
      </ul>
      <Footer />
    </section>
  )
}

export default observer(Main)