import { createStackNavigator, createAppContainer } from 'react-navigation'

import DrawerContent from '../components/DrawerContent'

import AppNavigator from './app/AppNavigator'

const RootNavigator = createStackNavigator(
  {
    App: {
      screen: AppNavigator,
    },
  },
  {
    initialRouteName: 'App',
    headerMode: 'none',
    contentComponent: DrawerContent,
  }
)

export default createAppContainer(RootNavigator)
