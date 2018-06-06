import React from 'react'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
  FontAwesome,
  SimpleLineIcons
} from '@expo/vector-icons'

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

import DrawerContent from './DrawerContent'

import stackNavigatorHOC from './StackNavigatorHOC'

const AppScreen = createDrawerNavigator(
  {
    NextLaunchScreen: {
      screen: stackNavigatorHOC(NextLaunchScreen),
      navigationOptions: {
        title: `Next mission`,
        drawerIcon: (
          <MaterialIcons name={'access-time'} size={24} color={'#005288'} />
        )
      }
    },
    LatestLaunchScreen: {
      screen: stackNavigatorHOC(LatestLaunchScreen),
      navigationOptions: {
        title: `Latest mission`,
        drawerIcon: <MaterialIcons name={'tv'} size={24} color={'#005288'} />
      }
    },
    LaunchesScreen: {
      screen: stackNavigatorHOC(LaunchBrowserScreen, {
        key: 'MissionDetails',
        component: LaunchDetails
      }),
      navigationOptions: {
        title: `Mission browser`,
        drawerIcon: (
          <MaterialIcons name={'search'} size={24} color={'#005288'} />
        )
      }
    },
    RocketScreen: {
      screen: stackNavigatorHOC(RocketScreen),
      navigationOptions: {
        title: `Rockets`,
        drawerIcon: (
          <SimpleLineIcons name={'rocket'} size={24} color={'#005288'} />
        )
      }
    },
    CapsuleScreen: {
      screen: stackNavigatorHOC(CapsuleScreen),
      navigationOptions: {
        title: `Capsule`,
        drawerIcon: <Entypo name={'basecamp'} size={24} color={'#005288'} />
      }
    },
    CoreScreen: {
      screen: stackNavigatorHOC(CoreScreen),
      navigationOptions: {
        title: `Core`,
        drawerIcon: <FontAwesome name={'minus'} size={24} color={'#005288'} />
      }
    },
    CompanyScreen: {
      screen: stackNavigatorHOC(CompanyScreen),
      navigationOptions: {
        title: `About SpaceX`,
        drawerIcon: (
          <SimpleLineIcons name={'briefcase'} size={24} color={'#005288'} />
        )
      }
    },
    LaunchpadScreen: {
      screen: stackNavigatorHOC(LaunchpadScreen),
      navigationOptions: {
        title: `Launchpads`,
        drawerIcon: (
          <SimpleLineIcons name={'location-pin'} size={24} color={'#005288'} />
        )
      }
    },
    SettingsScreen: {
      screen: stackNavigatorHOC(SettingsScreen),
      navigationOptions: {
        title: `Settings`,
        drawerIcon: (
          <MaterialIcons name={'settings'} size={24} color={'#005288'} />
        )
      }
    },
    AboutScreen: {
      screen: stackNavigatorHOC(AboutScreen),
      navigationOptions: {
        title: `About`,
        drawerIcon: (
          <MaterialIcons name={'info-outline'} size={24} color={'#005288'} />
        )
      }
    }
  },
  {
    initialRouteName: 'RocketScreen',
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
    initialRouteName: 'AppScreen',
    navigationOptions: {
      header: null
    },
    contentComponent: DrawerContent
  }
)
export default MainNavigator
