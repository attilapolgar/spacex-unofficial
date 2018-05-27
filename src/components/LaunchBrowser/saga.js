import { delay } from 'redux-saga'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import Api from '@common/api'
import { LAUNCH_DATA_FETCH_REQUESTED } from './action-types'
import { launchDataFetchFailed, launchDataFetchSucceeded } from './actions'
import { repeatedRequest } from '@common/utils'

function* fetchAllLaunchData() {
  try {
    const data = yield call(repeatedRequest, Api.fetchAllLaunchData)
    yield put(launchDataFetchSucceeded({ data }))
  } catch (error) {
    yield put(launchDataFetchFailed({ errorMessage: error.message }))
  }
}

export default function* mySaga3() {
  yield takeLatest(LAUNCH_DATA_FETCH_REQUESTED, fetchAllLaunchData)
}
