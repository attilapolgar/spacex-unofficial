import React from 'react'
import { createStackNavigator, DrawerActions } from 'react-navigation'

import HamburgerIcon from './HamburgerIcon'

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

export default stackNavigatorHOC
