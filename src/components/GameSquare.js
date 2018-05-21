import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableNativeFeedback
} from 'react-native'
import { connect } from 'react-redux'
import { playerReactedThunk, startRound, startGameThunk } from '../actions'
class GameSquare extends Component {
  handleTouch = () => {
    if (this.props.gameStarted) this.props.playerReacted()
  }
  render() {
    return (
      <TouchableNativeFeedback onPress={this.handleTouch}>
        <View style={[styles.field]}>
          {this.props.gameStarted ? (
            this.props.rounds.length &&
            this.props.rounds[this.props.rounds.length - 1].revealed ? (
              <Text style={styles.gem}>💎</Text>
            ) : (
              <Text />
            )
          ) : (
            <Button
              style={styles.readyButton}
              title="start"
              onPress={this.props.startGame}
            />
          )}
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = StyleSheet.create({
  field: {
    flex: 3,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center'
  },
  readyButton: {
    marginTop: 10,
    height: 50
  },
  gem: {
    fontSize: 100
  }
})

const mapStateToProps = state => ({
  gameStarted: state.game.started,
  rounds: state.game.rounds
})
const mapDispatchToProps = dispatch => ({
  playerReacted: () => dispatch(playerReactedThunk()),
  startGame: () => dispatch(startGameThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(GameSquare)
