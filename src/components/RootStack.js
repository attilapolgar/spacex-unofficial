import AboutScreen from './AboutScreen'
import HomeScreen from './HomeScreen'
import { createStackNavigator } from 'react-navigation'

const RootStack = createStackNavigator(
  {
    About: AboutScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#444'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

export default RootStack
