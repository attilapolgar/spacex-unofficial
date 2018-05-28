import { all } from 'redux-saga/effects'

import launchBrowser from '@components/LaunchBrowser/saga'
import nextLaunch from '@components/NextLaunch/saga'
import lastestLaunch from '@components/LatestLaunch/saga'
import data from './data'

export default function* rootSaga() {
  yield all([launchBrowser(), nextLaunch(), lastestLaunch(), data()])
}
