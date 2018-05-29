import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import Sentry from 'sentry-expo'

import store from './src/store'
import MainNavigator from './src/components/MainNavigator'

Sentry.enableInExpoDevelopment = true
Sentry.config(
  'https://7cf1ca1114a54c2eaba14a87d721f303@sentry.io/1215376'
).install()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  }
}
