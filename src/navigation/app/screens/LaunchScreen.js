import React, { Component } from 'react'
import { Container, Tabs, Tab, Content } from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import LaunchView from '@components/LaunchView'
import LaunchBrowser from '@components/LaunchBrowser'
import AppHeader from '@components/AppHeader'

const tabs = [
  {
    title: 'Next launch',
  },
  {
    title: 'Latest launch',
  },
  {
    title: 'Launch browser',
  },
]

const initialTab = 0

class LaunchScreen extends Component {
  static propTypes = {
    latestLaunch: PropTypes.object,
    nextLaunch: PropTypes.object,
    navigation: PropTypes.object,
  }

  state = {
    title: 'Launches',
  }

  setTitle = i => {
    this.setState({
      title: tabs[i].title,
    })
  }

  handleTabChange = tab => {
    this.setTitle(tab.i)
  }

  componentDidMount = () => {
    this.setTitle(initialTab)
  }

  render() {
    return (
      <Container>
        <AppHeader
          navigation={this.props.navigation}
          title={this.state.title}
        />
        <Tabs
          initialPage={initialTab}
          tabBarPosition="bottom"
          onChangeTab={this.handleTabChange}
        >
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
  nextLaunch: state.data.nextLaunch,
})

export default connect(mapStateToProps)(LaunchScreen)
