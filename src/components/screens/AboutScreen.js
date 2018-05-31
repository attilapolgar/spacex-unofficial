import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { WebBrowser } from 'expo'

import { MaterialCommunityIcons } from '@expo/vector-icons'
export default class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Created by Attila Polgar</Text>
          <Text>raglopa@gmail.com</Text>
          <View style={styles.socialImages}>
            <TouchableOpacity
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  'https://www.linkedin.com/in/attilapolgar/'
                )
              }
            >
              <MaterialCommunityIcons
                name={'linkedin-box'}
                size={75}
                color={'black'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  'https://github.com/raglopa/lbd-react-native'
                )
              }
            >
              <MaterialCommunityIcons
                name={'github-circle'}
                size={75}
                color={'black'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  socialImages: {
    flexDirection: 'row',
    marginTop: 50
  },
  socialImage: {
    margin: 10,
    height: 48,
    width: 48
  }
})
