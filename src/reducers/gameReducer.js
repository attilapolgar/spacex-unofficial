import { average, round } from '../utils'
import {
  START_ROUND,
  END_ROUND,
  START_GAME,
  REVEAL_ROUND,
  PLAYER_REACTED
} from '../constants/action-types'

const initialState = {
  started: false,
  avgReactionTime: 0,
  rounds: []
}

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME: {
      return {
        ...state,
        started: true
      }
    }
    case START_ROUND: {
      const { revealDelay } = action.payload
      return {
        ...state,
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
      const reactionTimeStamp = Date.now()
      const currentRound = state.rounds[state.rounds.length - 1]
      let reactionTime = 0
      let goodReaction = false
      if (currentRound.revealed) {
        reactionTime = reactionTimeStamp - currentRound.revealTimeStamp
        goodReaction = true
      }
      const mcd = {
        ...currentRound,
        playerReacted: true,
        goodReaction,
        reactionTimeStamp,
        reactionTime
      }
      const rounds = [...state.rounds.slice(0, state.rounds.length - 1), mcd]
      return {
        ...state,
        avgReactionTime: round(
          average(
            ...rounds
              .filter(round => round.goodReaction)
              .map(round => round.reactionTime)
          )
        ),
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
