import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import { Text } from 'react-native'

import AboutScreen from './AboutScreen'
import SettingsScreen from './SettingsScreen'
import NextLaunchScreen from './NextLaunchScreen'
import { DrawerActions } from 'react-navigation'
import HamburgerIcon from './HamburgerIcon'
import DrawerIcon from './DrawerIcon'

const stackNavigatorHOC = component =>
  createStackNavigator(
    {
      component
    },
    {
      headerMode: 'float',
      initialRouteName: 'component',
      navigationOptions: ({ navigation }) => {
        const isDrawerOpen = navigation.state.isDrawerOpen
        return {
          headerStyle: { backgroundColor: '#4C3E54', paddingLeft: 5 },
          headerTintColor: 'white',
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

const RootStack = createDrawerNavigator(
  {
    NextLaunchScreen: {
      screen: stackNavigatorHOC(NextLaunchScreen),
      navigationOptions: {
        title: `Next launch`,
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
    initialRouteName: 'NextLaunchScreen',
    navigationOptions: {}
  }
)

export default RootStack
