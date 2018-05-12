import { END_ROUND, SCORED, PLAYER_READY } from '../constants/action-types'

export const endRound = () => ({
  type: END_ROUND
})

export const scored = payload => ({
  type: SCORED,
  payload
})

export const playerReady = payload => ({
  type: PLAYER_READY,
  payload
})
