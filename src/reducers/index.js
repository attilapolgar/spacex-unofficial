import { combineReducers } from 'redux'
import launchBrowser from '@components/LaunchBrowser/reducer'
import data from '../reducers/dataReducer'
import preload from '../reducers/preloadAssets'
export default combineReducers({
  launchBrowser,
  data,
  preload
})
