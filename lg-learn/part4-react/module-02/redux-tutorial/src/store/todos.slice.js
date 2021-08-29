import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector, //状态选择器
} from '@reduxjs/toolkit'
import axios from 'axios'

// 创建实体适配器(id可配置)
const todosAdapter = createEntityAdapter({selectId: todo => todo.cid})

export const TODOS_FEATURE_KEY = 'todos'

export const loadTodos = createAsyncThunk(
  'todos/loadTodos',
  (payload) => axios.get(payload).then( response => response.data )
)


const { reducer: TodosReducer, actions } = createSlice({
  name: TODOS_FEATURE_KEY,
  initialState: todosAdapter.getInitialState(),
  reducers: {
    addTodo: {
      reducer: todosAdapter.addOne,
      prepare: todo => {
        console.log('prepare', todo)
        return {
          payload: {
            cid: Math.random(),
            ...todo
          }
        }
      }
    },
    setTodos: (state, action) => {
      todosAdapter.addMany(state, action.payload)
      // action.payload.forEach( todo => state.push(todo) )
    }
  },
  // 接受异步action
  extraReducers: {
    [loadTodos.pending]: (state, action) => {
      console.log('pending')
      return state
    },
    [loadTodos.fulfilled]: todosAdapter.addMany
  }
})

const { selectAll } = todosAdapter.getSelectors()

// 状态选择器
export const selectTodos = createSelector(state => state[TODOS_FEATURE_KEY], selectAll)

export const { addTodo, setTodos } = actions

export default TodosReducer