import { combineReducers } from 'redux'
import launchBrowser from '@components/LaunchBrowser/reducer'
import nextLaunch from '@components/NextLaunch/reducer'
import latestLaunch from '@components/LatestLaunch/reducer'
import data from '../reducers/dataReducer'

export default combineReducers({
  launchBrowser,
  nextLaunch,
  latestLaunch,
  data
})
