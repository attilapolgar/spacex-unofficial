import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import { MaterialIcons, Entypo, SimpleLineIcons } from '@expo/vector-icons'

import { AboutScreen, RocketScreen, LaunchScreen } from './screens'

import LaunchDetails from '../../components/LaunchDetails'
import DrawerContent from '../../components/DrawerContent'

import stackNavigatorHOC from '../StackNavigatorHOC'

const AppNavigator = createDrawerNavigator(
  {
    LaunchScreen: {
      screen: stackNavigatorHOC(LaunchScreen, {
        key: 'MissionDetails',
        component: LaunchDetails,
      }),
      navigationOptions: {
        title: `Missions`,
        drawerIcon: <Entypo name={'browser'} size={24} color={'#005288'} />,
      },
    },
    RocketScreen: {
      screen: stackNavigatorHOC(RocketScreen),
      navigationOptions: {
        title: `Rockets`,
        drawerIcon: (
          <SimpleLineIcons name={'rocket'} size={24} color={'#005288'} />
        ),
      },
    },
    AboutScreen: {
      screen: stackNavigatorHOC(AboutScreen),
      navigationOptions: {
        title: `About`,
        drawerIcon: (
          <MaterialIcons name={'info-outline'} size={24} color={'#005288'} />
        ),
      },
    },
  },
  {
    initialRouteName: 'LaunchScreen',

    navigationOptions: {
      headerMode: 'none',
    },
    contentComponent: DrawerContent,
  }
)
export default AppNavigator
