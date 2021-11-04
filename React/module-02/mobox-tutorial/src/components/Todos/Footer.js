import { observer } from "mobx-react-lite"

import { useRootStore } from '../../store'
import UnCompletedTodoCount from './UnCompletedTodoCount'

function Footer () {
  const { todoStore: { clearCompletedTodos, changeFilterCondition, filterCondition } } = useRootStore()
  return (
    <footer className="footer">
      <UnCompletedTodoCount />
      <ul className="filters">
        {
          ['all', 'active', 'completed'].map((item, index) => (
            <li key={index}>
              <button
                className={filterCondition === item ? 'selected' : ''}
                onClick={() => {changeFilterCondition(item)}}
              >{item}
              </button>
            </li>
          ))
        }
      </ul>
      <button className='clear-completed' onClick={clearCompletedTodos}>
        Clear completed
      </button>
    </footer>
  )
}

export default observer(Footer)