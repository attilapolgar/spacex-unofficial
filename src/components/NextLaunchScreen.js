import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import DrawerIcon from './DrawerIcon'
import { fetchNextLaunchFetchRequested } from '../actions'
import { connect } from 'react-redux'

import LaunchView from './LaunchView'

class NextLaunchScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return { title: 'Next launch', drawerIcon: <DrawerIcon image={'user'} /> }
  }
  componentWillMount = () => {
    this.props.fetchNextLaunch()
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.pending ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : this.props.success ? (
          <LaunchView data={this.props.nextLaunch} />
        ) : (
          <Text>failed: {this.props.errorMessage}</Text>
        )}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})

const mapStateToProps = state => ({
  nextLaunch: state.api.nextLaunch,
  success: state.api.success,
  failed: state.api.failed,
  pending: state.api.pending,
  errorMessage: state.api.errorMessage
})

const mapDispatchToProps = dispatch => ({
  fetchNextLaunch: () => dispatch(fetchNextLaunchFetchRequested())
})

export default connect(mapStateToProps, mapDispatchToProps)(NextLaunchScreen)
