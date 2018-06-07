import React, { Component } from 'react'
import { Container, Tabs, Tab, Header, Content } from 'native-base'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import LaunchView from '@components/LaunchView'
import LaunchBrowser from '@components/LaunchBrowser'
import AppHeader from '@components/AppHeader'

class LaunchScreen extends Component {
  static propTypes = {
    latestLaunch: PropTypes.object,
    nextLaunch: PropTypes.object,
    navigation: PropTypes.object
  }

  render() {
    return (
      <Container>
        <AppHeader navigation={this.props.navigation} title="Launches" />
        <Tabs initialPage={0} tabBarPosition="bottom">
          <Tab heading="Next">
            <ScrollView style={{ flex: 1 }}>
              <LaunchView data={this.props.nextLaunch} />
            </ScrollView>
          </Tab>
          <Tab heading="Latest">
            <ScrollView style={{ flex: 1 }}>
              <LaunchView data={this.props.latestLaunch} />
            </ScrollView>
          </Tab>
          <Tab heading="Browse">
            <LaunchBrowser navigation={this.props.navigation} />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  latestLaunch: state.data.latestLaunch,
  nextLaunch: state.data.nextLaunch
})

export default connect(mapStateToProps)(LaunchScreen)
