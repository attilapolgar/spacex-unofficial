import { combineReducers } from 'redux'
import game from './game'
import players from './players'

export default combineReducers({ game, players })
