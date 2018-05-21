import React, { Component } from 'react'
import { connect } from 'react-redux'
import { endRound, playerReacted, startWhenPlayersReady } from '../actions'
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
        <View style={styles.scoreBoardContainer}>
          <ScoreBoard />
        </View>
        <GameSquare player={this.props.player} />
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
  player: state.player
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
