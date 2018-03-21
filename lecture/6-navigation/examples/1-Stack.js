import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <MyNavigator />;
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

class ScreenComponentOne extends React.Component {
  static navigationOptions = {
    title: 'First screen',
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 25,
          borderColor: 'teal',
        }}>
        <Button
          title="Go to two"
          onPress={() => this.props.navigation.navigate('routeNameTwo')}
        />
      </View>
    );
  }
}

class ScreenComponentTwo extends React.Component {
  static navigationOptions = {
    title: 'Second screen',
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 25,
          borderColor: 'orange',
        }}>
        <Button
          title="Go to three"
          onPress={() =>
            this.props.navigation.navigate('routeNameThree', {
              randomNumber: getRandomNumber(),
            })
          }
        />
      </View>
    );
  }
}

class ScreenComponentThree extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Number: ${navigation.getParam('randomNumber')}`,
    };
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 25,
          borderColor: 'purple',
        }}>
        <Text style={{ fontSize: 25 }}>
          {this.props.navigation.getParam('randomNumber')}
        </Text>
        <Button
          title="Get a new random number"
          onPress={() => {
            this.props.navigation.setParams({
              randomNumber: getRandomNumber(),
            });
          }}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const MyNavigator = createStackNavigator(
  {
    routeNameOne: ScreenComponentOne,
    routeNameTwo: ScreenComponentTwo,
    routeNameThree: ScreenComponentThree,
  },
  {
    // headerTransitionPreset: 'uikit',
    // mode: 'modal',
  }
);
