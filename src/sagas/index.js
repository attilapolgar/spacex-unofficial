import { delay } from 'redux-saga'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  NEXT_LAUNCH_FETCH_REQUESTED,
  LATEST_LAUNCH_FETCH_REQUESTED
} from '../constants/action-types'
import {
  nextLaunchFetchSuceeded,
  nextLaunchFetchFailed,
  latestLaunchFetchFailed,
  latestLaunchFetchSuceeded
} from '../actions'
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
  yield takeLatest(NEXT_LAUNCH_FETCH_REQUESTED, fetchNextLaunch)
}

function* fetchLatestLaunch() {
  try {
    const data = yield call(repeatedRequest, Api.fetchLatestLaunch)
    yield put(latestLaunchFetchSuceeded({ data }))
  } catch (error) {
    yield put(latestLaunchFetchFailed({ errorMessage: error.message }))
  }
}

function* mySaga2() {
  yield takeLatest(LATEST_LAUNCH_FETCH_REQUESTED, fetchLatestLaunch)
}

export default function* rootSaga() {
  yield all([mySaga(), mySaga2()])
}
