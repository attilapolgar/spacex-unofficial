import { END_ROUND, PLAYER_READY, START_GAME } from '../constants/action-types'

const initialState = {
  round: 1,
  started: false
}

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case END_ROUND: {
      return { ...state, round: state.round + 1 }
    }
    case START_GAME: {
      console.log('START_GAME reducer!!!')
      return { ...state, started: true }
    }
    default:
      return state
  }
}
