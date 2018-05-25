import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import { Image, ScrollView, StyleSheet } from 'react-native'

import AboutScreen from './screens/AboutScreen'
import SettingsScreen from './screens/SettingsScreen'
import LaunchesScreen from './screens/LaunchesScreen'
import DrawerIcon from './DrawerIcon'
import DrawerContent from './DrawerContent'
import stackNavigatorHOC from './StackNavigatorHOC'

const RootStack = createDrawerNavigator(
  {
    LaunchesScreen: {
      screen: LaunchesScreen,
      navigationOptions: {
        title: `Launches`,
        drawerIcon: <DrawerIcon image={'rocket'} />
      }
    },
    SettingsScreen: {
      screen: stackNavigatorHOC(SettingsScreen),
      navigationOptions: {
        title: `Settings`,
        drawerIcon: <DrawerIcon image={'settings'} />
      }
    },
    AboutScreen: {
      screen: stackNavigatorHOC(AboutScreen),
      navigationOptions: {
        title: `About`,
        drawerIcon: <DrawerIcon image={'info'} />
      }
    }
  },
  {
    initialRouteName: 'LaunchesScreen',
    navigationOptions: {},
    contentComponent: DrawerContent
  }
)

export default RootStack
