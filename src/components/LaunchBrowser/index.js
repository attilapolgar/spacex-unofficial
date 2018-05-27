import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity } from 'react-native'
import {
  DeckSwiper,
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
    this.state = {
      selected: 'key1'
    }
  }
  onValueChange = status => {
    console.log('onValueChange', status)
    this.props.filterForLaunchStatus({ status })
  }

  onLaunchSelected = id => {
    this.props.navigation.navigate('LaunchDetails', {
      itemId: id
    })
    this.props.selectLaunch({ id })
  }

  render() {
    return (
      <RefreshableScrollView
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

        {this.props.data &&
          this.props.filteredData.map(launch => (
            <TouchableOpacity
              key={launch.flight_number}
              onPress={() => this.onLaunchSelected(launch.flight_number)}
            >
              <LaunchViewSummary data={launch} />
            </TouchableOpacity>
          ))}
      </RefreshableScrollView>
    )
  }
}

const mapStateToProps = state => ({
  data: state.launchBrowser.data,
  filteredData: state.launchBrowser.filteredData,
  selectedLaunch: state.launchBrowser.selectedLaunch,
  requestState: state.launchBrowser.requestState,
  launchStatusFilter: state.launchBrowser.launchStatusFilter
})

const mapDispatchToProps = dispatch => ({
  fetchNextLaunch: () => dispatch(nextLaunchFetchRequested()),
  fetchLaunchData: () => dispatch(launchDataFetchRequested()),
  selectLaunch: payload => dispatch(selectLaunch(payload)),
  selectNextLaunch: () => dispatch(selectNextLaunch()),
  selectPrevLaunch: () => dispatch(selectPrevLaunch()),
  filterForLaunchStatus: payload => dispatch(filterForLaunchStatus(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchBrowser)
