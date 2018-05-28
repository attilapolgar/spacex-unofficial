import { all } from 'redux-saga/effects'

import launchBrowser from '@components/LaunchBrowser/saga'
import data from './data'

export default function* rootSaga() {
  yield all([launchBrowser(), data()])
}
