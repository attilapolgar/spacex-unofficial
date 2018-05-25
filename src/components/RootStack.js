import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import { Text } from 'react-native'

import AboutScreen from './AboutScreen'
import SettingsScreen from './SettingsScreen'
import NextLaunchScreen from './NextLaunchScreen'
import { DrawerActions } from 'react-navigation'
import HamburgerIcon from './HamburgerIcon'

const DrawerNavigation = createDrawerNavigator(
  {
    NextLaunchScreen,
    SettingsScreen,
    AboutScreen
  },
  {
    headerMode: 'float',
    initialRouteName: 'NextLaunchScreen'
  }
)

const RootStack = createStackNavigator(
  {
    DrawerNavigation
  },
  {
    initialRouteName: 'DrawerNavigation',
    navigationOptions: ({ navigation }) => {
      const isDrawerOpen = navigation.state.isDrawerOpen
      return {
        headerStyle: { backgroundColor: '#4C3E54', paddingLeft: 5 },
        headerTintColor: 'white',
        title: '',
        headerLeft: (
          <HamburgerIcon
            active={isDrawerOpen}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        )
      }
    }
  }
)

export default RootStack
