import React, { Component } from 'react'
import { Container, Tabs, Tab, Content } from 'native-base'
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
            <Content>
              <LaunchView data={this.props.nextLaunch} />
            </Content>
          </Tab>
          <Tab heading="Latest">
            <Content>
              <LaunchView data={this.props.latestLaunch} />
            </Content>
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
