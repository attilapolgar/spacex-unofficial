import { combineReducers } from 'redux'
import launchBrowser from '@components/LaunchBrowser/reducer'
import data from '../reducers/dataReducer'
import preload from '../components/SplashScreen/reducer'
export default combineReducers({
  launchBrowser,
  data,
  preload
})
