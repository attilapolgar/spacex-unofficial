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
          <Image
            style={styles.logo}
            source={require('../../assets/img/spacex-logo.png')}
          />
          <Text style={styles.titleText}>companion</Text>
        </View>
        <View style={styles.indicator}>
          <Text style={styles.statusText}>
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
    marginTop: 50,
    padding: 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    // backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 5
  },
  logo: {
    height: 30,
    width: 300,
    resizeMode: 'contain'
  },
  titleText: {
    marginTop: 10,
    fontSize: 18,
    // color: '#000',
    color: '#fff',
    fontWeight: '100'
  },
  statusText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 50
  },
  indicator: {
    height: 30
  }
})

const mapStateToProps = state => ({
  requestState: state.data.requestState
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(prefetchDataRequested())
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
