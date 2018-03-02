import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  row: {padding: 20},
})

const Row = props => (
  <View style={styles.row}>
    <Text>{props.value}</Text>
  </View>
)

Row.propTypes = {
  value: PropTypes.any,
}

export default Row
