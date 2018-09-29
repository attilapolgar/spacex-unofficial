import React from 'react'
import { StyleSheet, Linking, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { List, CardItem, ListItem, Text, Content } from 'native-base'

export default ({ data }) => {
  const validLinks = Object.keys(data.links)
    .filter(k => data.links[k])
    .map(key => ({
      key,
      provider: key
        .toLocaleUpperCase()
        .split('_')
        .join(' '),
      url: data.links[key],
    }))

  return (
    validLinks.length > 0 && (
      <View>
        <CardItem header style={styles.cardItem}>
          <MaterialIcons name={'link'} size={32} color={'#005288'} />
          <Text style={styles.headerText}>Links</Text>
        </CardItem>
        <CardItem>
          <Content>
            <List>
              {validLinks.map(link => (
                <ListItem key={link.key}>
                  <Text
                    style={styles.link}
                    onPress={() => Linking.openURL(link.url)}
                  >
                    {link.provider}
                  </Text>
                </ListItem>
              ))}
            </List>
          </Content>
        </CardItem>
      </View>
    )
  )
}

const borderColor = 'rgba(0, 0, 0, 0.2)'

const styles = StyleSheet.create({
  cardItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor,
  },
  headerText: {
    marginLeft: 10,
  },
  link: { textDecorationLine: 'underline' },
})
