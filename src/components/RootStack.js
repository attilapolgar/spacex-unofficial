import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import { Text } from 'react-native'
import Hamburger from 'react-native-hamburger'

import AboutScreen from './AboutScreen'
import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import { DrawerActions } from 'react-navigation'

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
      return {
        headerStyle: {
          backgroundColor: '#4C3E54',
          paddingLeft: 5
        },
        headerTintColor: 'white',
        title: 'React!',
        headerLeft: (
          <Hamburger
            active={navigation.state.isDrawerOpen}
            color="white"
            style={{}}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        )
      }
    }
  }
)

export default RootStack
