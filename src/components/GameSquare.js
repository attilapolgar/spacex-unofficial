import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback
} from 'react-native'
import { connect } from 'react-redux'
import { playerReactedThunk, startRound, startGameThunk } from '../actions'
class GameSquare extends Component {
  lastRender = null
  handleTouch = () => {
    const date = Date.now()
    const reactionTime = date - this.lastRender
    if (this.props.gameStarted && !this.props.gameEnded) {
      this.props.playerReacted({ reactionTime })
    }

    if (!this.props.gameStarted || this.props.gameEnded) {
      this.props.startGame()
    }
  }
  render() {
    this.lastRender = Date.now()
    const ongoingGame = this.props.gameStarted && !this.props.gameEnded
    const actualRound = this.props.rounds[this.props.rounds.length - 1]

    return (
      <TouchableWithoutFeedback onPress={this.handleTouch}>
        <View style={[styles.field]}>
          {ongoingGame ? (
            this.props.rounds.length && actualRound.revealed ? (
              <Text style={styles.gem}>{this.props.target}</Text>
            ) : (
              <Text>Wait for it...</Text>
            )
          ) : (
            <Text style={styles.startText}>Start new test</Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  field: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  gem: {
    fontSize: 100
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
  startGame: () => dispatch(startGameThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(GameSquare)
