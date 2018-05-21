import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import { playerScored } from '../actions'
class GameSquare extends Component {
  handleTouch = playerIndex => {
    if (this.props.ready) {
      this.props.playerScored({ score: 1 })
    }
  }
  render() {
    return (
      <TouchableNativeFeedback onPress={this.handleTouch}>
        <View style={[styles.field]}>
          {this.props.ready ? true : <Text>press the button to start</Text>}
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
  }
})

const mapStateToProps = state => ({
  ready: state.player.ready
})
const mapDispatchToProps = dispatch => ({
  playerScored: payload => dispatch(playerScored(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(GameSquare)
