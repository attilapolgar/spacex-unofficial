import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import LaunchBrowser from '@components/LaunchBrowser'

import stackNavigatorHOC from '@components/StackNavigatorHOC'

const TabbedLaunchesScreen = createBottomTabNavigator(
  {
    LaunchBrowser: {
      screen: stackNavigatorHOC(LaunchBrowser),
      navigationOptions: {
        title: `Browse`
      }
    }
  },
  {
    initialRouteName: 'LaunchBrowser',
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
