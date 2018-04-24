/* eslint-disable react/prop-types */

import React from 'react'
import {Button, View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

import FlatListContacts from '../FlatListContacts'
import ScrollViewContacts from '../ScrollViewContacts'
import {changeFirstContact} from '../redux/actions'

// eslint-disable-next-line no-constant-condition
const ContactsList = false ? FlatListContacts : ScrollViewContacts

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

class ContactListScreen extends React.Component {
  state = {
    showContacts: true,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="change first contact" onPress={this.props.changeFirstContact} />
        {this.state.showContacts && <ContactsList contacts={this.props.contacts} />}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
})

export default connect(mapStateToProps, {changeFirstContact})(ContactListScreen)
