import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

import PureButton from './PureButton'

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
  },
})

export default class PureButtonScreen extends React.Component {
  state = {
    count: 0,
  }

  inc() {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>{this.state.count}</Text>
        <PureButton title="increment count" style={styles.button} onPress={this.inc} />
      </View>
    )
  }
}
