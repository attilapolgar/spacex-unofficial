import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import { Text } from 'react-native'

import AboutScreen from './AboutScreen'
import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import { DrawerActions } from 'react-navigation'
import HamburgerIcon from './HamburgerIcon'

const DrawerNavigation = createDrawerNavigator(
  {
    HomeScreen,
    SettingsScreen,
    AboutScreen
  },
  {
    headerMode: 'float',
    initialRouteName: 'HomeScreen'
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
        title: 'React!',
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
