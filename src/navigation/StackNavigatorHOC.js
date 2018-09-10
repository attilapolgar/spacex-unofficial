import React from 'react'
import { createStackNavigator, DrawerActions } from 'react-navigation'

import HamburgerIcon from '../components/HamburgerIcon'

const stackNavigatorHOC = (component, component2) => {
  let components = {
    component
  }

  if (component2) {
    components = {
      ...components,
      [component2.key]: component2.component
    }
  }
  return createStackNavigator(components, {
    headerMode: 'float',
    initialRouteName: 'component',
    navigationOptions: ({ navigation }) => {
      const isDrawerOpen = navigation.state.isDrawerOpen
      return {
        header: null,
        headerStyle: {
          backgroundColor: '#005288'
        },
        headerTintColor: 'white',
        headerLeft: (
          <HamburgerIcon
            active={isDrawerOpen}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        )
      }
    }
  })
}

export default stackNavigatorHOC
