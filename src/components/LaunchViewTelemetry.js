import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import { StyleSheet, Linking } from 'react-native'
import { Card, CardItem, Text } from 'native-base'

export default ({ data }) => {
  return (
    data.telemetry &&
    data.telemetry.flight_club && (
      <Card>
        <CardItem header style={styles.cardItem}>
          <MaterialIcons name={'multiline-chart'} size={32} color={'#005288'} />
          <Text style={styles.headerText}>Telemetry</Text>
        </CardItem>
        <CardItem style={[styles.cardItem]}>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL(data.telemetry.flight_club)}
          >
            {data.telemetry.flight_club}
          </Text>
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
