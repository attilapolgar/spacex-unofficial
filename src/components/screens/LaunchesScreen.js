import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import LaunchBrowser from '@components/LaunchBrowser'
import NextLaunch from '@components/NextLaunch'
import LatestLaunch from '@components/LatestLaunch'

import stackNavigatorHOC from '@components/StackNavigatorHOC'

const TabbedLaunchesScreen = createBottomTabNavigator(
  {
    NextLaunch: {
      screen: stackNavigatorHOC(NextLaunch),
      navigationOptions: {
        title: `Next`
      }
    },
    LatestLaunch: {
      screen: stackNavigatorHOC(LatestLaunch),
      navigationOptions: {
        title: `Latest`
      }
    },
    LaunchBrowser: {
      screen: stackNavigatorHOC(LaunchBrowser),
      navigationOptions: {
        title: `Browse`
      }
    }
  },
  {
    initialRouteName: 'LatestLaunch',
    navigationOptions: { title: 'Launches' },
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
