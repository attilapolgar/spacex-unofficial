import { combineReducers } from 'redux'
import nextLaunch from './nextLaunchReducer'
import latestLaunch from './latestLaunchReducer'

export default combineReducers({ nextLaunch, latestLaunch })
