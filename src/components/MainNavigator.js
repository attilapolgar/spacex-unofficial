import React from 'react'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import { Image, ScrollView, StyleSheet, Button } from 'react-native'
import Ionicons from 'react-native-vector-icons/MaterialIcons'

import AboutScreen from './screens/AboutScreen'
import SettingsScreen from './screens/SettingsScreen'
import NextLaunchScreen from './NextLaunch'
import LatestLaunchScreen from './LatestLaunch'
import LaunchBrowserScreen from './LaunchBrowser'
import CapsuleScreen from './screens/CapsuleScreen'
import CoreScreen from './screens/CoreScreen'
import CompanyScreen from './screens/CompanyScreen'
import LaunchpadScreen from './screens/LaunchpadScreen'
import RocketScreen from './screens/RocketScreen'
import LaunchDetails from './LaunchDetails'
import SplashScreen from './SplashScreen'

import DrawerIcon from './DrawerIcon'
import DrawerContent from './DrawerContent'

import stackNavigatorHOC from './StackNavigatorHOC'

const AppScreen = createDrawerNavigator(
  {
    NextLaunchScreen: {
      screen: stackNavigatorHOC(NextLaunchScreen),
      navigationOptions: {
        title: `Next launch`,
        drawerIcon: <DrawerIcon image={'rocket'} />
      }
    },
    LatestLaunchScreen: {
      screen: stackNavigatorHOC(LatestLaunchScreen),
      navigationOptions: {
        title: `Latest launch`,
        drawerIcon: <DrawerIcon image={'rocket'} />
      }
    },
    LaunchesScreen: {
      screen: stackNavigatorHOC(LaunchBrowserScreen, {
        key: 'LaunchDetails',
        component: LaunchDetails
      }),
      navigationOptions: {
        title: `Launch browser`,
        drawerIcon: <DrawerIcon image={'rocket'} />
      }
    },
    // RocketScreen: {
    //   screen: stackNavigatorHOC(RocketScreen),
    //   navigationOptions: {
    //     title: `Rockets`,
    //     drawerIcon: <DrawerIcon image={'rocket2'} />
    //   }
    // },
    // CapsuleScreen: {
    //   screen: stackNavigatorHOC(CapsuleScreen),
    //   navigationOptions: {
    //     title: `Capsule`,
    //     drawerIcon: <DrawerIcon image={'space-capsule'} />
    //   }
    // },
    // CoreScreen: {
    //   screen: stackNavigatorHOC(CoreScreen),
    //   navigationOptions: {
    //     title: `Core`,
    //     drawerIcon: <DrawerIcon image={'rocket'} />
    //   }
    // },
    // CompanyScreen: {
    //   screen: stackNavigatorHOC(CompanyScreen),
    //   navigationOptions: {
    //     title: `About SpaceX`,
    //     drawerIcon: <DrawerIcon image={'spacex-logo'} />
    //   }
    // },
    // LaunchpadScreen: {
    //   screen: stackNavigatorHOC(LaunchpadScreen),
    //   navigationOptions: {
    //     title: `Launchpads`,
    //     drawerIcon: <DrawerIcon image={'placeholder'} />
    //   }
    // },
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

const MainNavigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen
    },
    AppScreen: {
      screen: AppScreen
    }
  },
  {
    initialRouteName: 'SplashScreen',
    navigationOptions: {
      header: null
    },
    contentComponent: DrawerContent
  }
)
export default MainNavigator
