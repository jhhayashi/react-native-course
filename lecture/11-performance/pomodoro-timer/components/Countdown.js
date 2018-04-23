import React from 'react'
import {StyleSheet, Text} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  text: {fontSize: 72},
})

const Countdown = props => {
  const totalSecs = Math.round(props.timeRemaining / 1000)
  const mins = Math.floor(totalSecs / 60)
  const secs = totalSecs % 60
  const paddedZero = secs < 10 ? '0' : ''
  return <Text style={[styles.text, props.style]}>{mins}:{paddedZero}{secs}</Text>
}

Countdown.propTypes = {
  onToggleTimer: PropTypes.func.isRequired,
  // in ms
  timeRemaining: PropTypes.number.isRequired,
  style: PropTypes.number,
}

export default Countdown
