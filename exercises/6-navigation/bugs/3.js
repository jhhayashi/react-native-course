import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
  },
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Home',
  };
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.label}>Home Screen</Text>
        <Button
          title="Go to Jane's Contact Screen"
          onPress={() => {
            this.props.navigation.navigate('ContactScreen', { name: 'Jane' });
          }}
        />
        <Button
          title="Edit Bob's Contact Screen"
          onPress={() => {
            this.props.navigation.navigate('ContactScreen', {
              name: 'Bob',
              isEditing: true,
            });
          }}
        />
      </View>
    );
  }
}

/////
// Do not edit anything above this line
/////

class ContactScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Jane',
    headerRight: <Button onPress={() => {}} title="Edit" />,
  };

  render() {
    const isEditing = this.props.navigation.getParam('isEditing', false);
    const message = isEditing
      ? 'Now editing. Press the upper right "Done" button to go back.'
      : 'Press "Edit" to start editing.';
    return (
      <View style={styles.screen}>
        <Text style={styles.label}>{message}</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  HomeScreen,
  ContactScreen,
});

export default AppNavigator;
