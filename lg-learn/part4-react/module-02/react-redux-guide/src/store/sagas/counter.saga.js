import { takeEvery, put, delay } from 'redux-saga/effects';
import { increment } from '../actions/counter.action'
import { INCREMENT_ASYNC } from '../const/counter.const'
//taskEvery 接受action
// put 触发 action

function* increment_async_fn (action) {
  console.log(action)
  yield delay(2000)
  yield put(increment(action.payload))
}


export default function* counterSaga () {
  yield takeEvery(INCREMENT_ASYNC, increment_async_fn)
}