import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

class OnlyUpdateOnEvens extends Component {
  shouldComponentUpdate(nextProps) {
    return !(nextProps.count % 2)
  }
  
  componentDidUpdate() {
    console.log(this.props.count)
  }
  
  render() {
    return <Text>{this.props.count}</Text>
  }
}

class Counter extends Component {
  state = {
    count: 0,
  }
  
  componentDidMount() {
    this.timer = setInterval(this.incrementCount, 500)
  }
  
  incrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  
  render() {
    return <OnlyUpdateOnEvens count={this.state.count} />
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter />
      </View>
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
});
