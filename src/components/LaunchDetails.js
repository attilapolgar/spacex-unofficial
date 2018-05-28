import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from 'react-native'

import LaunchView from '@components/LaunchView'

class LaunchDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const data = navigation.getParam('data')
    // return { title: `Mission ${data.mission_name}` }
  }

  constructor(props) {
    super(props)

    this.state = { render: false }
  }

  componentDidMount = () => {
    window.setTimeout(() => {
      this.setState({ render: true })
    })
  }

  render() {
    const { navigation } = this.props
    const data = navigation.getParam('data')
    return this.state.render ? (
      <ScrollView>
        <LaunchView data={data} />
      </ScrollView>
    ) : (
      <ActivityIndicator size="large" color="#0000ff" />
    )
  }
}
const styles = StyleSheet.create({})

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(LaunchDetails)
