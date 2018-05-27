import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/MaterialIcons'
import LaunchBrowser from '@components/LaunchBrowser'
import NextLaunch from '@components/NextLaunch'
import LatestLaunch from '@components/LatestLaunch'
import LaunchDetails from '@components/LaunchDetails'

import stackNavigatorHOC from '@components/StackNavigatorHOC'

const TabbedLaunchesScreen = createBottomTabNavigator(
  {
    NextLaunch: {
      screen: stackNavigatorHOC(NextLaunch),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Ionicons name={`watch-later`} size={25} color={tintColor} />
        ),
        title: `Next`
      }
    },
    LatestLaunch: {
      screen: stackNavigatorHOC(LatestLaunch),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Ionicons name={`tv`} size={25} color={tintColor} />
        ),
        title: `Latest`
      }
    },
    LaunchBrowser: {
      screen: stackNavigatorHOC(LaunchBrowser),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Ionicons name={`search`} size={25} color={tintColor} />
        ),
        title: `Browse`
      }
    },
    LaunchDetails: {
      screen: stackNavigatorHOC(LaunchDetails),
      navigationOptions: {
        title: false
      }
    }
  },
  {
    initialRouteName: 'LaunchBrowser',
    navigationOptions: { title: 'Launches', visible: false },
    tabBarOptions: {
      labelStyle: {
        fontSize: 12
      },
      tabStyle: {
        width: 100
      },
      style: {
        justifyContent: 'center'
      }
    }
  }
)

export default TabbedLaunchesScreen
