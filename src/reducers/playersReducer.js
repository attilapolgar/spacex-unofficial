import { SCORED, PLAYER_READY } from '../constants/action-types'

const initialState = [
  {
    id: 'p1',
    score: 0,
    avatar: '🦉',
    ready: false
  },
  {
    id: 'p2',
    score: 0,
    avatar: '🦍',
    ready: false
  }
]

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case SCORED: {
      const { playerId, points } = action.payload
      return state.map(
        player =>
          player.id === playerId
            ? {
                ...player,
                score: player.score + points
              }
            : player
      )
    }
    case PLAYER_READY: {
      const { playerId } = action.payload
      return state.map(
        player =>
          player.id === playerId
            ? {
                ...player,
                ready: true
              }
            : player
      )
    }
    default:
      return state
  }
}
