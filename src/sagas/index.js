import { delay } from 'redux-saga'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { LAUNCH_DATA_FETCH_REQUESTED } from '../constants/action-types'
import { launchDataFetchFailed, launchDataFetchSucceeded } from '../actions'
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

function* fetchAllLaunchData() {
  try {
    const data = yield call(repeatedRequest, Api.fetchAllLaunchData)
    yield put(launchDataFetchSucceeded({ data }))
  } catch (error) {
    yield put(launchDataFetchFailed({ errorMessage: error.message }))
  }
}

function* mySaga3() {
  yield takeLatest(LAUNCH_DATA_FETCH_REQUESTED, fetchAllLaunchData)
}

export default function* rootSaga() {
  yield all([mySaga3()])
}
