import React, { Component } from 'react'
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import { scored } from '../actions'
class GameSquare extends Component {
  handleTouch = playerIndex => {
    if (this.props.gameStarted) {
      this.props.scored({ playerId: this.props.player.id, points: 1 })
    }
  }
  render() {
    return (
      <TouchableNativeFeedback onPress={this.handleTouch}>
        <View style={[styles.field]} />
      </TouchableNativeFeedback>
    )
  }
}

const styles = StyleSheet.create({
  field: {
    flex: 3,
    backgroundColor: 'grey'
  }
})

const mapStateToProps = state => ({
  gameStarted: state.game.started
})
const mapDispatchToProps = dispatch => ({
  scored: payload => dispatch(scored(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(GameSquare)
