import { createStackNavigator } from 'react-navigation'

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
    navigationOptions: {
      header: null,
    },
    contentComponent: DrawerContent,
  }
)
export default RootNavigator
