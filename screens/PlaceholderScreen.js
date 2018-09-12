import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Placeholder extends Component {
  static navigationOptions = {
    title: 'Placeholder',
  }

  render() {
    return (
      <View>
        <Text>
          Placeholder component
        </Text>
      </View>
    )
  }
}

export default Placeholder
