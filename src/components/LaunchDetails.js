import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import LaunchView from '@components/LaunchView'

class LaunchDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const data = navigation.getParam('data')
    return { title: `Mission: ${data.mission_name}` }
  }

  render() {
    const { navigation } = this.props
    const data = navigation.getParam('data')
    return (
      <ScrollView>
        <LaunchView data={data} />
      </ScrollView>
    )
  }
}

LaunchDetails.propTypes = {
  navigation: PropTypes.object
}

export default LaunchDetails
