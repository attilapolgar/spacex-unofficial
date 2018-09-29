import React, { Component } from "react"
import { ScrollView } from "react-native"
import PropTypes from "prop-types"
import { Header, Left, Button, Icon, Title, Right, Body } from "native-base"
import LaunchView from "@components/LaunchView"

class LaunchDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const data = navigation.getParam("data")
    return { title: `Mission: ${data.mission_name}` }
  }

  handleBackPress = () => {
    this.props.navigation.goBack()
  }

  render() {
    const { navigation } = this.props
    const data = navigation.getParam("data")
    return (
      <ScrollView>
        <Header>
          <Left>
            <Button transparent onPress={this.handleBackPress}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{data.mission_name}</Title>
          </Body>
          <Right />
        </Header>
        <LaunchView data={data} />
      </ScrollView>
    )
  }
}

LaunchDetails.propTypes = {
  navigation: PropTypes.object,
}

export default LaunchDetails
