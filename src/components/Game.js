import React, { Component } from 'react'
import { connect } from 'react-redux'
import { endRound, scored, startWhenPlayersReady } from '../actions'
import ScoreBoard from '../components/ScoreBoard'
import GameSquare from '../components/GameSquare'

import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'

class Game extends Component {
  constructor(props) {
    super()
    const maxFlex = 10
  }

  render() {
    return (
      <View style={styles.container}>
        <GameSquare player={this.props.players[0]} />
        <View style={styles.scoreBoardContainer}>
          <ScoreBoard />
        </View>
        <GameSquare player={this.props.players[1]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scoreBoardContainer: {
    flex: 2
  }
})

const mapStateToProps = state => ({
  started: state.game.stated,
  players: state.players
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
