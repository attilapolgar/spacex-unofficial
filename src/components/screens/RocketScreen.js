import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Container, Header, Tabs, Tab } from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AppHeader from '@components/AppHeader'
import RocketDetails from '@components/RocketDetails'
class RocketScreen extends Component {
  static propTypes = {
    data: PropTypes.array,
    navigation: PropTypes.object
  }
  render() {
    const f1 = this.props.data.find(r => r.id === 'falcon1')
    const f9 = this.props.data.find(r => r.id === 'falcon9')
    const fh = this.props.data.find(r => r.id === 'falconheavy')
    const bfr = this.props.data.find(r => r.id === 'bfr')
    return (
      <Container>
        <AppHeader navigation={this.props.navigation} title="Rockets" />
        <Tabs initialPage={0} tabBarPosition="bottom">
          <Tab heading="F1">
            <RocketDetails data={f1} />
          </Tab>
          <Tab heading="F9">
            <RocketDetails data={f9} />
          </Tab>
          <Tab heading="FH">
            <RocketDetails data={fh} />
          </Tab>
          <Tab heading="BFR">
            <RocketDetails data={bfr} />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data.rockets
})

export default connect(mapStateToProps)(RocketScreen)
