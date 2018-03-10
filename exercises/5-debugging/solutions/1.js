import React from 'react'
import {StyleSheet,  Text, View} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  center: {
    alignSelf: 'center',
  },
  greeting: {
    color: 'red',
  },
})


const Container = props => (
  <View style={styles.container}>
    <Greeting style={styles.center} />
  </View>
)

/////
// Do not edit anything above this line
/////

const Greeting = props => (
  <Text style={[styles.greeting, props.style]}>
    This text should be red and centered vertically
  </Text>
)

export default () => <Container />
