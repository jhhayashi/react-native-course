import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
  },
})

const BoldText = props => (
  <Text style={styles.boldText}>
    {props.value}
  </Text>
);

/////
// Do not edit anything above this line
/////

export default class Bug extends React.Component {
  greeting = {
    value: 'Hello, world!',
    valueChanged: false,
  }

  handleGreetingChange = () => {
    const newGreeting = 'Howdy, sir!'
    this.greeting = { value: newGreeting, valueChanged: true };
  }

  render() {
    return (
      <View>
        <BoldText
          value={this.greeting.value}
        />
        <Button
          title='Press me to change greeting one time'
          disabled={this.greeting.valueChanged}
          onPress={this.handleGreetingChange}
        />
      </View>
    );
  }
}

