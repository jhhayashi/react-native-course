import React from 'react';
import { Button, Text, View } from 'react-native';

const BoldText = props => (
  <Text style={{fontWeight: 'bold'}}>
    {props.value}
  </Text>
);

/////
// Do not edit anything above this line
/////

export default class Bug extends React.Component {
  state = {
    value: 'Hello, world!',
    valueChanged: false,
  }

  _changeGreeting = () => {
    const newGreeting = 'Howdy, sir!'
    this.setState({ value: newGreeting, valueChanged: true });
  }

  render() {
    return (
      <View>
        <BoldText
          value={this.state.value}
        />
        <Button
          title='Press me to change greeting one time'
          disabled={this.state.valueChanged}
          onPress={this._changeGreeting}
        />
      </View>
    );
  }
}
