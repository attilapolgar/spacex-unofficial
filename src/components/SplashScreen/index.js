import React, { Component } from 'react'
import { connect } from 'react-redux'
import { prefetchDataRequested } from '../../actions'

import {
  Text,
  ImageBackground,
  Image,
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native'

class SplashScreen extends Component {
  componentDidMount = () => {
    this.props.fetchData()
  }
  componentDidUpdate = props => {
    const { navigation } = this.props
    this.props.requestState.success && navigation.replace('AppScreen')
  }
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require('../../assets/img/splashScreen.jpg')}
      >
        <View style={styles.title}>
          <Image source={require('../../assets/img/spacex-logo.png')} />
          <Text style={styles.titleText}>UNOFFICIAL</Text>
        </View>
        <View>
          <Text style={styles.statusText}>
            {this.props.requestState.success && 'Ready to go'}
            {this.props.requestState.failed && 'Something went wrong'}
          </Text>
          {this.props.requestState.pending && (
            <ActivityIndicator size="large" color="#fff" />
          )}
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    alignItems: 'center',
    marginTop: 50
  },
  titleText: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff'
  },
  statusText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 50
  }
})

const mapStateToProps = state => ({
  requestState: state.data.requestState
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(prefetchDataRequested())
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
