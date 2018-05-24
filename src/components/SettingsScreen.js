import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import DrawerIcon from './DrawerIcon'

export default class AboutScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      drawerLabel: 'Settings',
      drawerIcon: <DrawerIcon image={'settings'} />
    }
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({})
