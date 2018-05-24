import React, { Component } from 'react'
import { View } from 'react-native'
import DrawerIcon from './DrawerIcon'
import Game from './Game'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Play',
    drawerIcon: <DrawerIcon image={'time'} />
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Game />
      </View>
    )
  }
}
