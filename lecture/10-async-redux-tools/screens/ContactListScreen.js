import React from 'react'
import {Button, View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

import SectionListContacts from '../SectionListContacts'

class ContactListScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Contacts',
    headerRight: (
      <Button title="Add" onPress={() => navigation.navigate('AddContact')} color="#a41034" />
    ),
  })

  state = {
    showContacts: true,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  handleSelectContact = contact => {
    this.props.navigation.push('ContactDetails', contact)
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        {this.state.showContacts && (
          <SectionListContacts
            contacts={this.props.contacts}
            onSelectContact={this.handleSelectContact}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = state => ({
  contacts: state.contacts,
})

export default connect(mapStateToProps)(ContactListScreen)
