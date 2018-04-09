import React from 'react'
import {Button, View, StyleSheet, Text, TextInput} from 'react-native'

import {login} from '../api'

export default class LoginScreen extends React.Component {
  state = {
    username: '',
    password: '',
  }

  _login = async () => {
    try {
      const success = await login(this.state.username, this.state.password)
      this.props.navigation.navigate('Main')
    } catch (err) {
      const errMessage = err.message
      this.setState({err: errMessage})
    }
  }

  handleUsernameUpdate = username => {
    this.setState({username})
  }

  handlePasswordUpdate = password => {
    this.setState({password})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{this.state.err}</Text>
        <TextInput
          placeholder="username"
          value={this.state.username}
          onChangeText={this.handleUsernameUpdate}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="password"
          value={this.state.password}
          onChangeText={this.handlePasswordUpdate}
          secureTextEntry
        />
        <Button title="Press to Log In" onPress={this._login} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
  error: {
    textAlign: 'center',
    color: 'red',
  },
})
