import React from 'react'
import {Button} from 'react-native'
import PropTypes from 'prop-types'

const TimerToggleButton = props => {
  const title = props.isRunning ? 'Pause' : 'Start'
  return <Button title={title} onPress={props.onToggle} />
}

TimerToggleButton.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
}

export default TimerToggleButton
