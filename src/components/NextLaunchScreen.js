import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import DrawerIcon from './DrawerIcon'
import { fetchNextLaunchFetchRequested } from '../actions'
import { connect } from 'react-redux'

import LaunchView from './LaunchView'

import RefreshableScrollView from './RefreshableScrollView'
class NextLaunchScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return { title: 'Next launch', drawerIcon: <DrawerIcon image={'user'} /> }
  }

  render() {
    return (
      <RefreshableScrollView
        updateMethod={this.props.fetchNextLaunch}
        requestState={this.props.requestState}
      >
        <LaunchView data={this.props.data} />
      </RefreshableScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {}
})

const mapStateToProps = state => ({
  data: state.api.nextLaunch,
  requestState: state.api.nextLaunchRequestState
})

const mapDispatchToProps = dispatch => ({
  fetchNextLaunch: () => dispatch(fetchNextLaunchFetchRequested())
})

export default connect(mapStateToProps, mapDispatchToProps)(NextLaunchScreen)
