import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { Asset, AppLoading, Font } from 'expo'
import {
  FontAwesome,
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons
} from '@expo/vector-icons'
import Sentry from 'sentry-expo'

import store from './src/store'
import MainNavigator from './src/components/MainNavigator'

Sentry.enableInExpoDevelopment = false
Sentry.config(
  'https://7cf1ca1114a54c2eaba14a87d721f303@sentry.io/1215376'
).install()

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  })
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font))
}
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isReady: false
    }
  }

  async _cacheResourcesAsync() {
    const imageAssets = cacheImages([
      require('./src/assets/img/splashScreen.jpg'),
      require('./src/assets/img/falcon.jpg')
    ])

    const fontAssets = cacheFonts([FontAwesome.font])

    await Promise.all([...imageAssets, ...fontAssets])
  }
  render() {
    return (
      <Provider store={store}>
        {this.state.isReady ? (
          <MainNavigator />
        ) : (
          <AppLoading
            startAsync={this._cacheResourcesAsync}
            onFinish={() => this.setState({ isReady: true })}
            onError={console.warn}
          />
        )}
      </Provider>
    )
  }
}
