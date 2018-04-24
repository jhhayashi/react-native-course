/* eslint-disable */

import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  row: {padding: 20},
})

class Row extends React.Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.name !== this.props.name
  }

  render() {
    const {props} = this
    return (
      <View style={styles.row}>
        <Text>{props.name}</Text>
        <Text>{props.phone}</Text>
      </View>
    )
  }
}

Row.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
}

export default Row
