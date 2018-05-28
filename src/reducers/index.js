import { combineReducers } from 'redux'
import launchBrowser from '@components/LaunchBrowser/reducer'
import data from '../reducers/dataReducer'

export default combineReducers({
  launchBrowser,
  data
})
