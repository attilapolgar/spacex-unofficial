import { randomIntegerInRange } from '../utils'
import {
  PLAYER_REACTED,
  PLAYER_READY,
  START_GAME,
  END_GAME,
  START_ROUND,
  END_ROUND,
  REVEAL_ROUND
} from '../constants/action-types'

let timeout = null

export const playerReacted = payload => ({ type: PLAYER_REACTED, payload })

export const playerReady = payload => ({
  type: PLAYER_READY,
  payload
})

export const startGame = () => ({ type: START_GAME })
export const endGame = () => ({ type: END_GAME })
export const startRound = payload => ({ type: START_ROUND, payload })
export const endRound = () => ({ type: END_ROUND })
export const revealRound = () => ({ type: REVEAL_ROUND })

export const startGameThunk = () => (dispatch, getState) => {
  dispatch(startGame())

  dispatch(startRoundThunk())
}

export const startRoundThunk = () => (dispatch, getState) => {
  const revealDelay = randomIntegerInRange(1000, 5000)
  dispatch(startRound({ revealDelay }))

  timeout = window.setTimeout(() => {
    dispatch(revealRound())
  }, revealDelay)
}

export const playerReactedThunk = payload => (dispatch, getState) => {
  if (timeout) window.clearTimeout(timeout)
  dispatch(playerReacted(payload))
  dispatch(endRound())
  const {
    game: { numberOfRounds, actualRound }
  } = getState()
  if (actualRound === numberOfRounds) {
    dispatch(endGame())
  } else {
    dispatch(startRoundThunk())
  }
}
