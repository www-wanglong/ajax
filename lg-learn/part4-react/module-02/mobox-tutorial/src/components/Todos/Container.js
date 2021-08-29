import TodoHeader from './Header'
import TodoApp from "./TodoApp"
import TodoMain from './Main'

function Container () {
  return (
    <TodoApp>
      <TodoHeader />
      <TodoMain />
    </TodoApp>
  )
}

export default Container