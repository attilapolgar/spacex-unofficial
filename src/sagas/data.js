import { delay } from 'redux-saga'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import Api from '@common/api'
import { PREFETCH_DATA_REQUESTED } from '../action-types'
import { prefetchDataFailed, prefetchDataSucceeded } from '../actions'
import { repeatedRequest } from '@common/utils'

function* fetchAllData() {
  try {
    const nextLaunch = yield call(repeatedRequest, Api.fetchNextLaunchData)
    const latestLaunch = yield call(repeatedRequest, Api.fetchLatestLaunchData)
    const launches = yield call(repeatedRequest, Api.fetchAllLaunchData)
    yield put(prefetchDataSucceeded({ nextLaunch, latestLaunch, launches }))
  } catch (error) {
    yield put(prefetchDataFailed({ errorMessage: error.message }))
  }
}

export default function* mySaga3() {
  yield takeLatest(PREFETCH_DATA_REQUESTED, fetchAllData)
}
