import { combineReducers } from 'redux'
import game from './gameReducer'
import player from './playerReducer'

export default combineReducers({ game, player })
