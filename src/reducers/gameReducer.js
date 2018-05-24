import { average, round } from '../utils'
import {
  START_ROUND,
  END_ROUND,
  END_GAME,
  START_GAME,
  REVEAL_ROUND,
  PLAYER_REACTED,
  RESET_GAME
} from '../constants/action-types'

const initialState = {
  numberOfRounds: 5,
  actualRound: 0,
  started: false,
  ended: false,
  rounds: [],
  target: '🔘'
}

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME: {
      return {
        ...initialState,
        started: true
      }
    }
    case RESET_GAME: {
      return initialState
    }
    case END_GAME: {
      return {
        ...state,
        ended: true
      }
    }
    case START_ROUND: {
      const { revealDelay } = action.payload
      return {
        ...state,
        actualRound: state.actualRound + 1,
        rounds: [
          ...state.rounds,
          {
            id: state.rounds.length,
            startTimeStamp: Date.now(),
            revealed: false,
            playerReacted: false,
            revealDelay
          }
        ]
      }
    }

    case REVEAL_ROUND: {
      return {
        ...state,
        rounds: [
          ...state.rounds.slice(0, state.rounds.length - 1),
          {
            ...state.rounds[state.rounds.length - 1],
            revealed: true,
            revealTimeStamp: Date.now()
          }
        ]
      }
    }

    case PLAYER_REACTED: {
      const { reactionTime } = action.payload
      const currentRound = state.rounds[state.rounds.length - 1]
      const mcd = {
        ...currentRound,
        playerReacted: true,
        goodReaction: currentRound.revealed,
        reactionTime
      }
      const rounds = [...state.rounds.slice(0, state.rounds.length - 1), mcd]
      return {
        ...state,
        rounds
      }
    }
    case END_ROUND: {
      return {
        ...state,
        rounds: [
          ...state.rounds.slice(0, state.rounds.length - 1),
          { ...state.rounds[state.rounds.length - 1], endTime: Date.now() }
        ]
      }
    }
    default:
      return state
  }
}
