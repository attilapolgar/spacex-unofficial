import { all } from 'redux-saga/effects'

import launcherBrowser from '@components/LaunchBrowser/saga'

export default function* rootSaga() {
  yield all([launcherBrowser()])
}
