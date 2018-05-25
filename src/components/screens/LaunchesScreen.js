import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import AboutScreen from './AboutScreen'
import NextLaunchScreen from './NextLaunchScreen'
import LatestLaunchScreen from './LatestLaunchScreen'
import PastLaunchesScreen from './PastLaunchesScreen'
import UpcomingLaunchesScreen from './UpcomingLaunchesScreen'

import stackNavigatorHOC from '../StackNavigatorHOC'

const TabbedLaunchesScreen = createBottomTabNavigator(
  {
    NextLaunchScreen: {
      screen: stackNavigatorHOC(NextLaunchScreen),
      navigationOptions: {
        title: `Next`
      }
    },
    LatestLaunchScreen: {
      screen: stackNavigatorHOC(LatestLaunchScreen),
      navigationOptions: {
        title: `Latest`
      }
    },
    PastLaunchesScreen: {
      screen: stackNavigatorHOC(PastLaunchesScreen),
      navigationOptions: {
        title: `Past`
      }
    },
    UpcomingLaunchesScreen: {
      screen: stackNavigatorHOC(UpcomingLaunchesScreen),
      navigationOptions: {
        title: `Upcoming`
      }
    }
  },
  {
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
