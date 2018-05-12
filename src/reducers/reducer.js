import { END_ROUND, SCORED } from '../constants/action-types'

const initialState = {
  round: 1,
  players: [
    {
      name: 'Player 1',
      id: 'p1',
      score: 0
    },
    {
      name: 'Player 2',
      id: 'p2',
      score: 0
    }
  ]
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case END_ROUND: {
      return {
        ...state,
        round: state.round + 1
      }
    }
    case SCORED: {
      const { playerIndex, points } = action.payload
      console.log(playerIndex, points)
      return {
        ...state,
        players: state.players.map(
          (player, i) =>
            (i === playerIndex
              ? {
                ...state.players[playerIndex],
                score: state.players[playerIndex].score + points
              }
              : player)
        )
      }
    }
    default:
      return state
  }
}
