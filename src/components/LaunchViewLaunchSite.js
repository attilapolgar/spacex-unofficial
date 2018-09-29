import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'
import { Left, CardItem, Text, Body } from 'native-base'
import { MapView } from 'expo'
import { connect } from 'react-redux'

const LaunchViewLaunchSite = ({ data, launchpads }) => {
  const { location, details } = launchpads.find(
    pad => pad.id === data.launch_site.site_id
  )

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
              <Text style={styles.link}>{location.name}</Text>

              <Text style={styles.details}>{details}</Text>

              <MapView
                style={styles.mapView}
                initialRegion={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                  latitudeDelta: 0.2,
                  longitudeDelta: 0.2,
                }}
              >
                <MapView.Marker
                  coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                  }}
                  title={location.name}
                />
              </MapView>
            </Body>
          </Left>
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
  link: {},
  details: {
    marginTop: 25,
    marginBottom: 25,
  },
  mapView: { flex: 1, height: 400 },
})

const mapStateToProps = state => ({
  launchpads: state.data.launchpads,
})

export default connect(mapStateToProps)(LaunchViewLaunchSite)
