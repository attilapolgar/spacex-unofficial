import { call, put, takeLatest } from 'redux-saga/effects'
import { repeatedRequest } from '../common/utils'
import Api from '../common/api'
import {
  PREFETCH_DATA_REQUESTED,
  prefetchDataFailed,
  prefetchDataSucceeded,
} from '../reducers/dataReducer'

function* fetchAllData() {
  try {
    const nextLaunch = yield call(repeatedRequest, Api.fetchNextLaunchData)
    const latestLaunch = yield call(repeatedRequest, Api.fetchLatestLaunchData)
    const launches = yield call(repeatedRequest, Api.fetchAllLaunchData)
    const rockets = yield call(repeatedRequest, Api.fetchRocketData)
    const launchpads = yield call(repeatedRequest, Api.fetchLaunchpadData)

    yield put(
      prefetchDataSucceeded({
        nextLaunch,
        latestLaunch,
        launches,
        rockets,
        launchpads,
      })
    )
  } catch (error) {
    yield put(prefetchDataFailed({ errorMessage: error.message }))
  }
}

export default function* fetchDataSaga() {
  yield takeLatest(PREFETCH_DATA_REQUESTED, fetchAllData)
}
