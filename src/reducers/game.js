import { END_ROUND, PLAYER_READY } from '../constants/action-types'

const initialState = {
  round: 1
}

export default function gameReducer (state = initialState, action) {
  switch (action.type) {
    case END_ROUND: {
      return {
        ...state,
        round: state.round + 1
      }
    }
    default:
      return state
  }
}
