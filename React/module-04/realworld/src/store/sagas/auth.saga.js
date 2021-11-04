import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios';

function* login({ payload }) {
  try {
    //let { data } = yield axios.post('/users/login', payload)
    let data = {
      user: {
        name: 'long.wang',
        token: 'token'
      }
    }
    localStorage.setItem("token", data.user.token)
    yield put({ type: 'loginSuccess', payload: data.user })
  } catch (error) {
    const errors =
    yield put({ type: 'loginSuccess', payload: data.user })
  }

}

function* loadUser({ payload }) {
  try {
    // let { data } = yield axios.get('/user', {
    //   headers: {
    //     Authorization: `Token ${payload}`
    //   }
    // })
    let data = {
      user: {
        name: 'long.wang'
      }
    }
    yield put({type: 'loadUserSuccess', payload: data.user})
  } catch (e) {

  }

}

export default function* authSaga() {

  yield takeEvery('login', login)
  yield takeEvery('loadUser', loadUser)
}