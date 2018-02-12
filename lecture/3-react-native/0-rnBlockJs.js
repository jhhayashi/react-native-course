import React, { Component } from 'react';
import { Button, Text, ScrollView, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  state = {
    count: 0,
  }

  // EDIT: this wasn't in the original lecture code, but it makes it more obvious
  // that the JS thread gets locked
  componentDidMount() {
    setInterval(() => this.setState(prevState => ({count: prevState.count + 1})), 500)
  }
  
  blockJS() {
    console.log('blocking')
    const end = Date.now() + 5000
    while (Date.now() < end) {}
    console.log('unblocked')
  }

  render() {
    return (
      <ScrollView style={styles.container}>
      <Button title="block js thread" onPress={this.blockJS} />
        <Text style={styles.paragraph}>
          {this.state.count}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

