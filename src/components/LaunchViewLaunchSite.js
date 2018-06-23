import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Linking, View } from 'react-native'
import { Left, CardItem, Text, Body } from 'native-base'

export default ({ data }) => {
  return (
    data.launch_site && (
      <View>
        <CardItem header style={styles.cardItem}>
          <MaterialIcons name={'place'} size={32} color={'#005288'} />
          <Text style={styles.headerText}>Launch site</Text>
        </CardItem>
        <CardItem style={[styles.cardItem]}>
          <Left>
            <Body>
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    `https://www.google.com/maps/search/${
                      data.launch_site.site_name_long
                    }`
                  )
                }
              >
                {data.launch_site.site_name_long} ({data.launch_site.site_name})
              </Text>
            </Body>
          </Left>
        </CardItem>
      </View>
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
