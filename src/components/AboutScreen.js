import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class AboutScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const param = navigation.getParam('who', 'me')

    return { title: `About: ${param} 🙉` }
  }
  render () {
    const { navigation } = this.props
    const param = navigation.getParam('foo', '42')
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          About Screen: {JSON.stringify(param)}
        </Text>
      </View>
    )
  }
}
