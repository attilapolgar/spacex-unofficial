import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class AboutScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Settings'
    }
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>coming soon...</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({})
