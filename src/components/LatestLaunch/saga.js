import { delay } from 'redux-saga'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import Api from '@common/api'
import { LATEST_LAUNCH_FETCH_REQUESTED } from './action-types'
import { latestLaunchFetchFailed, latestLaunchFetchSucceeded } from './actions'
import { repeatedRequest } from '@common/utils'

function* fetchLaunchData() {
  try {
    const data = yield call(repeatedRequest, Api.fetchLatestLaunchData)
    console.log('fetchNextLaunchData', data)
    yield put(latestLaunchFetchSucceeded({ data }))
  } catch (error) {
    console.log('fetchNextLaunchData error', error)
    yield put(latestLaunchFetchFailed({ errorMessage: error.message }))
  }
}

export default function* mySaga3() {
  yield takeLatest(LATEST_LAUNCH_FETCH_REQUESTED, fetchLaunchData)
}
