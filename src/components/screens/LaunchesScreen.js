import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import NextLaunchScreen from './NextLaunchScreen'

import stackNavigatorHOC from '../StackNavigatorHOC'

const TabbedLaunchesScreen = createBottomTabNavigator(
  {
    NextLaunchScreen: {
      screen: stackNavigatorHOC(NextLaunchScreen),
      navigationOptions: {
        title: `Next`
      }
    }
  },
  {
    initialRouteName: 'NextLaunchScreen',
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
