import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Text,
  View,
  TouchableWithoutFeedback,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import {
  Card,
  CardItem,
  Left,
  Body,
  Container,
  Header,
  Form,
  Picker,
  Icon
} from 'native-base'

import LaunchViewSummary from '@components/LaunchViewSummary'
import RefreshableScrollView from '@components/RefreshableScrollView'

import {
  nextLaunchFetchRequested,
  launchDataFetchRequested,
  selectNextLaunch,
  selectLaunch,
  selectPrevLaunch,
  filterForLaunchStatus
} from './actions'

class LaunchBrowser extends Component {
  static navigationOptions = {
    title: 'Launch browser'
  }

  constructor(props) {
    super(props)

    this.state = { render: false }
  }
  onValueChange = status => {
    this.props.filterForLaunchStatus({ status })
  }

  onLaunchSelected = data => {
    this.props.navigation.navigate('LaunchDetails', {
      data
    })
  }

  componentDidMount = () => {
    window.setTimeout(() => {
      this.setState({ render: true })
    }, 0)
  }

  render() {
    return (
      <ScrollView
        updateMethod={this.props.fetchLaunchData}
        requestState={this.props.requestState}
        initialUpdate={!this.props.data}
      >
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Form>
                  <Picker
                    mode="dropdown"
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    selectedValue={this.props.launchStatusFilter}
                    onValueChange={this.onValueChange}
                  >
                    <Picker.Item label="All" value="all" />
                    <Picker.Item label="Success" value="success" />
                    <Picker.Item label="Failed" value="failed" />
                  </Picker>
                </Form>
              </Body>
            </Left>
          </CardItem>
        </Card>

        {this.state.render ? (
          this.props.data &&
          this.props.filteredData.map(launch => (
            <TouchableOpacity
              key={launch.flight_number}
              onPress={() => this.onLaunchSelected(launch)}
            >
              <LaunchViewSummary data={launch} />
            </TouchableOpacity>
          ))
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data.launches,
  filteredData: state.launchBrowser.filteredData,
  selectedLaunch: state.launchBrowser.selectedLaunch,
  requestState: state.launchBrowser.requestState,
  launchStatusFilter: state.launchBrowser.launchStatusFilter
})

const mapDispatchToProps = dispatch => ({
  filterForLaunchStatus: payload => dispatch(filterForLaunchStatus(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchBrowser)
