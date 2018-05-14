import React, { Component } from 'react'
import { connect } from 'react-redux'
import { endRound, scored } from '../actions'
import ScoreBoard from '../components/ScoreBoard'

import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'

class Game extends Component {
  constructor (props) {
    super()
    const maxFlex = 10
    this.handleTouch = this.handleTouch.bind(this)
  }

  handleTouch (playerIndex) {
    this.props.scored({ playerIndex, points: 1 })
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={() => this.handleTouch(0)}>
          <View style={[styles.field]} />
        </TouchableNativeFeedback>
        <View style={styles.scoreBoardContainer}>
          <ScoreBoard />
        </View>
        <TouchableNativeFeedback onPress={() => this.handleTouch(1)}>
          <View style={[styles.field]} />
        </TouchableNativeFeedback>
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
  },
  field: {
    flex: 3,
    backgroundColor: 'grey'
  }
})

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  endRound: () => dispatch(endRound()),
  scored: payload => dispatch(scored(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
