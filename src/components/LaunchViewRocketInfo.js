import React from 'react'
import moment from 'moment'
import { StyleSheet, Linking, Image } from 'react-native'
import { View, Left, Thumbnail, Card, CardItem, Text, Body } from 'native-base'
import falcon9Image from '../assets/img/falcon9-render.png'

const rocketImages = {
  falcon9: falcon9Image
}

export default ({ data }) => {
  return (
    <Card>
      <CardItem header style={styles.cardItem}>
        <Text>Rocket: {data.rocket.rocket_name}</Text>
      </CardItem>
      <CardItem style={[styles.cardItem]}>
        <Left>
          <Image source={falcon9Image} style={styles.image} />

          <Body>
            <Text style={styles.stageType}>First stage</Text>
            <View style={styles.stageInfo}>
              {data.rocket.first_stage.cores.map(core => (
                <View key={core.core_serial}>
                  <Text style={styles.info}>Serial: {core.core_serial}</Text>
                  <Text style={styles.info}>
                    Reused:{' '}
                    {core.reused ? `yes (it\'s ${core.flight}. flight)` : 'no'}
                  </Text>
                </View>
              ))}
            </View>

            <Text style={styles.stageType}>Second stage</Text>
            <View style={styles.stageInfo}>
              {data.rocket.second_stage.payloads.map(payload => (
                <View key={payload.payload_id} style={styles.payload}>
                  <Text style={styles.info}>Payload: {payload.payload_id}</Text>
                  <Text style={styles.info}>
                    Reused:{' '}
                    {payload.reused
                      ? `yes (it\'s ${core.flight}. flight)`
                      : 'no'}
                  </Text>
                  <Text style={styles.info}>
                    Customers:
                    {payload.customers
                      .toString()
                      .split(',')
                      .join(', ')}
                  </Text>
                  <Text style={styles.info}>Type: {payload.payload_type}</Text>
                  <Text style={styles.info}>
                    Mass: {payload.payload_mass_kg}kg /{' '}
                    {payload.payload_mass_lbs}lbs
                  </Text>
                  <Text style={styles.info}>Orbit: {payload.orbit}</Text>
                </View>
              ))}
            </View>
          </Body>
        </Left>
      </CardItem>
    </Card>
  )
}

const styles = StyleSheet.create({
  cardItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)'
  },
  stageInfo: {
    marginLeft: 15
  },
  stageType: {
    fontWeight: 'bold'
  },
  image: {
    width: 100,
    height: 500,
    resizeMode: 'contain'
  },
  payload: {
    padding: 5
  }
})
