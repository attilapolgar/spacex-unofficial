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

export default function playerReducer (state = initialState, action) {
  switch (action.type) {
    case SCORED: {
      const { playerIndex, points } = action.payload
      if (state.reduce((acc, p) => acc && p.ready, true)) {
        return state.map(
          (player, i) =>
            (i === playerIndex
              ? {
                ...state[playerIndex],
                score: state[playerIndex].score + points
              }
              : player)
        )
      } else {
        return state
      }
    }
    case PLAYER_READY: {
      const { playerId } = action.payload
      return state.map(
        (player, i) =>
          (player.id === playerId
            ? {
              ...player,
              ready: true
            }
            : player)
      )
    }
    default:
      return state
  }
}
