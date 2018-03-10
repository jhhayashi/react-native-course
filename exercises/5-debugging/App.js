import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Bug from './bugs/1'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Bug />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
