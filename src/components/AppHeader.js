import React from 'react'
import {
  Header,
  Title,
  Subtitle,
  Left,
  Body,
  Right,
  Button,
  Icon,
} from 'native-base'
import { DrawerActions } from 'react-navigation'

const AppHeader = ({ navigation, title, subtitle }) => (
  <Header>
    <Left>
      <Button
        transparent
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Icon name="menu" />
      </Button>
    </Left>
    <Body>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Body>
    <Right />
  </Header>
)

export default AppHeader
