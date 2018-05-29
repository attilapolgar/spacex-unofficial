import React from 'react'
import moment from 'moment'
import { StyleSheet, Image } from 'react-native'
import { View, Left, Card, CardItem, Text, Body } from 'native-base'
import falcon9Image from '../assets/img/falcon9-render.png'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const rocketImages = {
  falcon9: falcon9Image
}

export default ({ data }) => {
  return (
    <Card>
      <CardItem header style={styles.cardItem}>
        <MaterialCommunityIcons name={'rocket'} size={32} color={'#005288'} />
        <Text style={styles.headerText}>Rocket: {data.rocket.rocket_name}</Text>
      </CardItem>
      <CardItem style={[styles.cardItem]}>
        <Left>
          <Image
            source={rocketImages[data.rocket.rocket_id]}
            style={styles.image}
          />

          <Body>
            <Text style={styles.stageType}>First stage</Text>
            <View style={styles.stageInfo}>
              {data.rocket.first_stage.cores.map(core => (
                <View key={core.core_serial}>
                  <Text style={styles.info}>Serial: {core.core_serial}</Text>
                  <Text style={styles.info}>
                    Reused:{' '}
                    {core.reused ? `YES (${core.flight}. flight)` : 'NO'}
                  </Text>
                  {core.block && (
                    <Text style={styles.info}>Blocks: {core.block}</Text>
                  )}
                  {core.land_success && (
                    <Text style={styles.info}>
                      Land success: {core.land_success ? 'YES' : 'NO'}
                    </Text>
                  )}
                  {core.landing_type && (
                    <Text style={styles.info}>
                      Landing Type: {core.landing_type}
                    </Text>
                  )}
                  {core.landing_vehicle && (
                    <Text style={styles.info}>
                      Landing vehicle: {core.landing_vehicle}
                    </Text>
                  )}
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
                    {payload.reused ? `YES (${payload.flight}. flight)` : 'NO'}
                  </Text>
                  <Text style={styles.info}>
                    Customers:{' '}
                    {payload.customers
                      .toString()
                      .split(',')
                      .join(', ')}
                  </Text>
                  <Text style={styles.info}>Type: {payload.payload_type}</Text>
                  {payload.payload_mass_kg &&
                    payload.payload_mass_lbs && (
                      <Text style={styles.info}>
                        Mass: {payload.payload_mass_kg}kg /{' '}
                        {payload.payload_mass_lbs}lbs
                      </Text>
                    )}
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
  headerText: {
    marginLeft: 10
  },
  stageInfo: {
    marginLeft: 15
  },
  stageType: {
    fontWeight: 'bold'
  },
  image: {
    width: 100,
    height: 300,
    resizeMode: 'contain'
  },
  payload: {
    padding: 5
  }
})
