import React, { Component } from 'react'
import { connect } from 'react-redux'
import { endRound, playerReacted, startWhenPlayersReady } from '../actions'
import ScoreBoard from '../components/ScoreBoard'
import GameSquare from '../components/GameSquare'

import { View, Text, StyleSheet } from 'react-native'

const Game = ({ player }) => (
  <View style={styles.container}>
    <View style={styles.container}>
      <ScoreBoard />
    </View>
    <View style={styles.container}>
      <GameSquare player />
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = state => ({
  started: state.game.stated,
  player: state.player
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
