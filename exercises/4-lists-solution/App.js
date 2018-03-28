import React from 'react';
import { Button, SectionList, StyleSheet, View } from 'react-native';
import {Constants} from 'expo'

import Header from './Header'
import ModifyObjectForm from './ModifyObjectForm'
import Row from './Row'

const DEFAULT_OBJECT = {
  foo: 'bar',
  baz: ['qux', 'quux', 'quuz', 'corge'],
}

const toArray = val => val instanceof Array ? val : [val]

const toObject = (value, key) => ({key, value})

const renderItem = ({item}) => <Row {...item} />

const renderSectionHeader = ({section}) => <Header text={section.title} />

export default class App extends React.Component {
  state = {
    obj: DEFAULT_OBJECT,
    showForm: false,
  }

  showForm = () => {
    this.setState({showForm: true})
  }

  modifyObject = (key, val) => {
    let parsed
    try {
      // if the value is valid js, treat it as so (objects, arrays, etc)
      parsed = JSON.parse(val)
    } catch (err) {
      // otherwise treat as a string
      parsed = val
    }

    this.setState(prevState => {
      // if the key's value is an array, add to the array
      if (prevState.obj[key] instanceof Array) {
        // clone the object, then overwrite the particular key that we're editing
        // by cloning that array and adding the new value at the beginning
        return {showForm: false, obj: {...prevState.obj, [key]: [parsed, ...prevState.obj[key]]}}
      }

      // if the the value wasn't an array, set the key to be the new value
      return {showForm: false, obj: {...prevState.obj, [key]: parsed}}
    })
  }

  render() {
    if (this.state.showForm) return <ModifyObjectForm onSubmit={this.modifyObject} />

    const sections = Object.keys(this.state.obj).map(key => ({
      key,
      title: key,
      // turn array of values into array of objects in the shape {key, value}
      data: toArray(this.state.obj[key]).map(toObject),
    }))

    return (
      <View style={styles.container}>
        <Button title="Modify Object" onPress={this.showForm} />
        <SectionList
          style={styles.list}
          sections={sections}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    paddingTop: Constants.statusBarHeight,
  },
  list: {
    flex: 1,
  },
});
