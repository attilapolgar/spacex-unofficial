import { PLAYER_SCORED, PLAYER_READY } from '../constants/action-types'

const initialState = {
  id: 'p1',
  score: 0,
  avatar: '🦉',
  ready: false
}

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case PLAYER_SCORED: {
      const { score } = action.payload
      return {
        ...state,
        score: state.score + score
      }
    }
    case PLAYER_READY: {
      return {
        ...state,
        ready: true
      }
    }
    default:
      return state
  }
}
