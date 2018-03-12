import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    borderColor: '#ddd',
    width: 100,
    borderWidth: 1,
  },
  messageContainer: {
    flexDirection: 'column',
  },
  messageHeader: {
    fontWeight: 'bold',
  },
});

export default class BugThree extends React.Component {
  state = {
    message: {
      owner: '',
      content: '',
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.message.owner}
          onChangeText={this._onOwnerChange}
        />
        <TextInput
          style={styles.input}
          value={this.state.message.content}
          onChangeText={this._onContentChange}
        />
        <View style={styles.messageContainer}>
          <Text style={styles.messageHeader}>Current Message</Text>
          <Text>Owner: {this.state.message.owner}</Text>
          <Text>Content: {this.state.message.content}</Text>
        </View>
      </View>
    );
  }

  /////
  // Do not edit anything above this line
  /////

  _onOwnerChange = (owner) => {
    this.setState({ message: {...this.state.message, owner}});
  }

  _onContentChange = (content) => {
    this.setState({ message: {...this.state.message, content}});
  }
}
