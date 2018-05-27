import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import { Image, ScrollView, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/MaterialIcons'

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
      screen: stackNavigatorHOC(CapsuleScreen),
      navigationOptions: {
        title: `Capsule`,
        drawerIcon: <DrawerIcon image={'space-capsule'} />
      }
    },
    CoreScreen: {
      screen: CoreScreen,
      navigationOptions: {
        title: `Core`,
        drawerIcon: <DrawerIcon image={'rocket'} />
      }
    },
    CompanyScreen: {
      screen: stackNavigatorHOC(CompanyScreen),
      navigationOptions: {
        title: `About SpaceX`,
        drawerIcon: <DrawerIcon image={'spacex-logo'} />
      }
    },
    LaunchpadScreen: {
      screen: stackNavigatorHOC(LaunchpadScreen),
      navigationOptions: {
        title: `Launchpads`,
        drawerIcon: <DrawerIcon image={'placeholder'} />
      }
    },
    RocketScreen: {
      screen: stackNavigatorHOC(RocketScreen),
      navigationOptions: {
        title: `Rockets`,
        drawerIcon: <DrawerIcon image={'rocket2'} />
      }
    },
    // SettingsScreen: {
    //   screen: stackNavigatorHOC(SettingsScreen),
    //   navigationOptions: {
    //     title: `Settings`,
    //     drawerIcon: <Ionicons name={'settings'} size={24} color={'black'} />
    //   }
    // },
    AboutScreen: {
      screen: stackNavigatorHOC(AboutScreen),
      navigationOptions: {
        title: `About`,
        drawerIcon: <Ionicons name={'settings'} size={24} color={'black'} />
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
