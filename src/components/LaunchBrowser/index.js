import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import {
  Text,
  View,
  TouchableWithoutFeedback,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Button
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
import LaunchFilter from './LaunchFilter'

class LaunchBrowser extends Component {
  static navigationOptions = () => ({
    title: 'Launch browser'
    // headerRight: (
    //   <Button
    //     onPress={() => {}}
    //     disabled={this.props.isFilterActive}
    //     title={'Reset filters'}
    //   />
    // )
  })

  constructor(props) {
    super(props)
  }

  onValueChange = status => {
    this.props.filterForLaunchStatus({ status })
  }

  onLaunchSelected = data => {
    this.props.navigation.navigate('LaunchDetails', {
      data
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <LaunchFilter />
        {this.props.filteredData && (
          <FlatList
            data={this.props.filteredData}
            keyExtractor={item => `${item.flight_number}`}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this.onLaunchSelected(item)}>
                <LaunchViewSummary data={item} />
              </TouchableOpacity>
            )}
          />
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {}
})

const mapStateToProps = state => ({
  filteredData: state.launchBrowser.filteredData,
  isFilterActive: state.launchBrowser.isFilterActive,
  launchStatusFilter: state.launchBrowser.launchStatusFilter
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchBrowser)
