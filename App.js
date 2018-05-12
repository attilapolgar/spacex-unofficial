import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { Provider } from 'react-redux'

import store from './src/store'

import Blink from './src/components/Blink'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor () {
    super()
    setInterval(() => {}, 1000)
  }
  render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Blink text='blink!' />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

// export default connect()(App)
export default App
