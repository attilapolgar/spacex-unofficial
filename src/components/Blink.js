import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Blink extends Component {
  constructor () {
    super()
    this.state = { showText: true }

    setInterval(
      () => this.setState(prevState => ({ showText: !prevState.showText })),
      500
    )
  }
  render () {
    let display = this.state.showText ? this.props.text : ''
    return (
      <View>
        <Text>{display}</Text>
      </View>
    )
  }
}
