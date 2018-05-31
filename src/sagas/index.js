import { all } from 'redux-saga/effects'

import launchBrowser from '@components/LaunchBrowser/saga'
import data from './data'
import preload from './preload-assets'

export default function* rootSaga() {
  yield all([launchBrowser(), data(), preload()])
}
