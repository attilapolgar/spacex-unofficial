import {
  END_ROUND,
  PLAYER_SCORED,
  PLAYER_READY,
  START_GAME
} from '../constants/action-types'

export const endRound = () => ({
  type: END_ROUND
})

export const playerScored = payload => ({ type: PLAYER_SCORED, payload })

export const playerReady = payload => ({
  type: PLAYER_READY,
  payload
})

export const startGame = () => ({ type: START_GAME })
