import { combineReducers } from 'redux'
import game from './gameReducer'
import players from './playersReducer'

export default combineReducers({ game, players })
