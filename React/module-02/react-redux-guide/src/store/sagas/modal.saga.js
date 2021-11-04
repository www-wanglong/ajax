import { takeEvery, put, delay } from 'redux-saga/effects';
import { SHOW_MODAL_ASYNC } from '../const/modal.const';
import { show } from '../actions/modal.actions';

function * show_modal_async_fn () {
  yield delay(2000)
  yield put(show())
}

export default function* modalSaga () {
  yield takeEvery(SHOW_MODAL_ASYNC, show_modal_async_fn)

}