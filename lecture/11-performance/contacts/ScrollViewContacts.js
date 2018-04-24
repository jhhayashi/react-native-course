import React from 'react'
import {ScrollView} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const ScrollViewContacts = props => (
  <ScrollView>
    {props.contacts.map(contact => <Row onSelectContact={props.onSelectContact} {...contact} />)}
  </ScrollView>
)

ScrollViewContacts.propTypes = {
  contacts: PropTypes.array, //eslint-disable-line
  onSelectContact: PropTypes.func,
}

export default ScrollViewContacts
