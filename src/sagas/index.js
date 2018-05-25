import { delay } from 'redux-saga'
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { NEXT_LAUNCH_FETCH_REQUESTED } from '../constants/action-types'
import { nextLaunchFetchSuceeded, nextLaunchFetchFailed } from '../actions'
import Api from '../common/api'

function* repeatedRequest(request, { retry = 5, retryDelay = 500 } = {}) {
  for (let i = 0; i < retry; i++) {
    try {
      return yield call(request)
    } catch (err) {
      if (i < retry - 1) {
        yield call(delay, retryDelay)
      }
    }
  }
  throw new Error('API request failed')
}

function* fetchNextLaunch() {
  try {
    const data = yield call(repeatedRequest, Api.fetchNextLaunch)
    yield put(nextLaunchFetchSuceeded({ data }))
  } catch (error) {
    yield put(nextLaunchFetchFailed({ errorMessage: error.message }))
  }
}

function* mySaga() {
  yield takeEvery(NEXT_LAUNCH_FETCH_REQUESTED, fetchNextLaunch)
}

export default function* rootSaga() {
  yield all([mySaga()])
}
