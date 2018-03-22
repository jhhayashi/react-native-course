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

const HomeScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Home Screen</Text>
    <Button
      title="Go to Jane's Contact Screen"
      onPress={() => {
        navigation.navigate('ContactScreen', { name: 'Jane' });
      }}
    />
  </View>
);

/////
// Do not edit anything above this line
/////

const ContactScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>FIXME's Contact Screen</Text>
    <Button
      title="Go to Lucy's Contact screen"
      onPress={() => {
        navigation.navigate('ContactScreen', { name: 'Lucy' });
      }}
    />
  </View>
);

const AppNavigator = createStackNavigator({
  HomeScreen,
  ContactScreen,
});

export default AppNavigator;
