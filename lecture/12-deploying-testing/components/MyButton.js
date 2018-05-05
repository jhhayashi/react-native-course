import React from 'react'
import {Button} from 'react-native'
import PropTypes from 'prop-types'

const MyButton = props => <Button title="test" onPress={() => {}} color={props.color || 'green'} />

MyButton.propTypes = {
  color: PropTypes.string,
}

export default MyButton
