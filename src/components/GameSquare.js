import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import {
  playerReactedThunk,
  startRound,
  resetGame,
  startGameThunk,
  startRoundThunk
} from '../actions'

import fingerprintImage from '../assets/img/fingerprint.png'
class GameSquare extends Component {
  lastRender = null
  handleReact = () => {
    const date = Date.now()
    const reactionTime = date - this.lastRender
    if (this.props.gameStarted && !this.props.gameEnded) {
      this.props.playerReacted({ reactionTime })
    }
  }
  handleStart = () => {
    this.props.startGame()
  }
  handleNextRound = () => {
    this.props.startRound()
  }
  handleReset = () => {
    this.props.resetGame()
  }
  render() {
    this.lastRender = Date.now()
    const ongoingGame = this.props.gameStarted && !this.props.gameEnded
    const actualRound = this.props.rounds[this.props.rounds.length - 1]

    return (
      <View style={[styles.field, styles.layout]}>
        {ongoingGame ? (
          this.props.rounds.length && actualRound.revealed ? (
            actualRound.playerReacted ? (
              <Text onPress={this.handleNextRound}>
                Tap to start next round
              </Text>
            ) : (
              <TouchableOpacity onPress={this.handleReact}>
                <Image style={styles.fingerprint} source={fingerprintImage} />
              </TouchableOpacity>
            )
          ) : (
            <Text>Wait for it...</Text>
          )
        ) : (
          <Button
            title="Start new test"
            style={styles.startButton}
            onPress={this.handleStart}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  layout: {
    //flex: 1
  },
  field: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    fontSize: 30,
    flex: 1,
    fontWeight: 'bold',
    width: 200,
    height: 25
  },
  fingerprint: {
    width: 128,
    height: 128
  }
})

const mapStateToProps = state => ({
  gameStarted: state.game.started,
  gameEnded: state.game.ended,
  rounds: state.game.rounds,
  target: state.game.target
})
const mapDispatchToProps = dispatch => ({
  playerReacted: payload => dispatch(playerReactedThunk(payload)),
  startGame: () => dispatch(startGameThunk()),
  startRound: () => dispatch(startRoundThunk()),
  resetGame: () => dispatch(resetGame())
})

export default connect(mapStateToProps, mapDispatchToProps)(GameSquare)
