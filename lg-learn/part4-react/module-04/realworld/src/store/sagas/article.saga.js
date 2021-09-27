import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

function* loadArticles({ limit, offset }) {
  console.log('limit', limit, offset)
  let { data } = yield axios.get('/articles', {
    params: {
      limit,
      offset
    }
  })
  yield put({ type: 'loadArticlesSuccess', payload: data.articles })
}

export default function* articleSaga(params) {
  yield takeEvery('loadArticles', loadArticles)
}