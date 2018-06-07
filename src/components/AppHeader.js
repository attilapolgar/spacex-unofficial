import React from 'react'
import {
  Header,
  Title,
  Subtitle,
  Left,
  Body,
  Right,
  Button,
  Icon
} from 'native-base'
import { DrawerActions } from 'react-navigation'

const AppHeader = ({ navigation, title, subtitle }) => {
  return (
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
      <Right>
        <Button transparent>
          <Icon name="arrow-back" />
        </Button>
      </Right>
    </Header>
  )
}

export default AppHeader
