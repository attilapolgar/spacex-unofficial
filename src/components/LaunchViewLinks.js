import React from 'react'
import { StyleSheet, Linking } from 'react-native'
import {
  Right,
  Left,
  Thumbnail,
  Card,
  Badge,
  List,
  CardItem,
  ListItem,
  Text,
  Content,
  Body
} from 'native-base'

export default ({ data }) => {
  const validLinks = Object.keys(data.links)
    .filter(k => data.links[k])
    .map(key => ({
      key,
      provider: key
        .toLocaleUpperCase()
        .split('_')
        .join(' '),
      url: data.links[key]
    }))

  console.log('validLinks', validLinks)
  return (
    validLinks.length > 0 && (
      <Card>
        <CardItem header style={styles.cardItem}>
          <Thumbnail small source={require('../assets/img/chains.png')} />
          <Text style={styles.headerText}>Links</Text>
        </CardItem>
        <CardItem>
          <Content>
            <List>
              {validLinks.map(link => {
                return (
                  <ListItem key={link.key}>
                    <Text
                      style={styles.link}
                      onPress={() => Linking.openURL(link.url)}
                    >
                      {link.provider}
                    </Text>
                  </ListItem>
                )
              })}
            </List>
          </Content>
        </CardItem>
      </Card>
    )
  )
}
const styles = StyleSheet.create({
  cardItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)'
  },
  headerText: {
    marginLeft: 10
  },
  link: { textDecorationLine: 'underline' }
})
