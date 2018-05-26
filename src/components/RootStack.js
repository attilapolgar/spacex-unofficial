import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import { Image, ScrollView, StyleSheet } from 'react-native'

import AboutScreen from './screens/AboutScreen'
import SettingsScreen from './screens/SettingsScreen'
import LaunchesScreen from './screens/LaunchesScreen'
import CapsuleScreen from './screens/CapsuleScreen'
import CoreScreen from './screens/CoreScreen'
import CompanyScreen from './screens/CompanyScreen'
import LaunchpadScreen from './screens/LaunchpadScreen'
import RocketScreen from './screens/RocketScreen'

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
    CapsuleScreen: {
      screen: CapsuleScreen,
      navigationOptions: {
        title: `Capsule`,
        drawerIcon: <DrawerIcon image={'space-capsule'} />
      }
    },
    // CoreScreen: {
    //   screen: CoreScreen,
    //   navigationOptions: {
    //     title: `Core`,
    //     drawerIcon: <DrawerIcon image={'rocket'} />
    //   }
    // },
    CompanyScreen: {
      screen: CompanyScreen,
      navigationOptions: {
        title: `About SpaceX`,
        drawerIcon: <DrawerIcon image={'spacex-logo'} />
      }
    },
    LaunchpadScreen: {
      screen: LaunchpadScreen,
      navigationOptions: {
        title: `Launchpads`,
        drawerIcon: <DrawerIcon image={'placeholder'} />
      }
    },
    RocketScreen: {
      screen: RocketScreen,
      navigationOptions: {
        title: `Rockets`,
        drawerIcon: <DrawerIcon image={'rocket2'} />
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
