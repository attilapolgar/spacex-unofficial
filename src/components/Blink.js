import React, { Component } from 'react'
import { connect } from 'react-redux'
import { endRound, scored } from '../actions'
import ScoreBoard from '../components/ScoreBoard'

import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'

class Blink extends Component {
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

        <ScoreBoard />

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
  field: {
    flex: 2,
    backgroundColor: 'grey',
    borderWidth: 10,
    margin: 30,
    borderColor: 'lightgrey'
  }
})

const mapStateToProps = state => ({
  round: state.round
})

const mapDispatchToProps = dispatch => ({
  endRound: () => dispatch(endRound()),
  scored: payload => dispatch(scored(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Blink)
