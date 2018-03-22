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

/////
// Do not edit anything above this line
/////

const HomeScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Home Screen</Text>
    <Button
      title="Go to Contact Screen"
      onPress={() => {
        navigation.navigate('ContactScreen');
      }}
    />
  </View>
);

const ContactScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Contact Screen</Text>
    <Button
      title="Go back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  </View>
);

const AppNavigator = createStackNavigator({
  HomeScreen,
  ContactScreen,
});

export default AppNavigator;
