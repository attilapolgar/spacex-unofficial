import { delay } from 'redux-saga'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import Api from '@common/api'
import { NEXT_LAUNCH_FETCH_REQUESTED } from './action-types'
import { nextLaunchFetchFailed, nextLaunchFetchSucceeded } from './actions'
import { repeatedRequest } from '@common/utils'

function* fetchNextLaunchData() {
  try {
    const data = yield call(repeatedRequest, Api.fetchNextLaunchData)
    yield put(nextLaunchFetchSucceeded({ data }))
  } catch (error) {
    yield put(nextLaunchFetchFailed({ errorMessage: error.message }))
  }
}

export default function* mySaga3() {
  yield takeLatest(NEXT_LAUNCH_FETCH_REQUESTED, fetchNextLaunchData)
}
