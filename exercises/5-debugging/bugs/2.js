import React from 'react'
import {Button, Text, View} from 'react-native'

const shallowEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  if (keys1.length !== keys2.length) return false
  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i]
    if (obj1[key] !== obj2[key]) return false
  }

  return true
}

class ListText extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(nextProps, this.props)
  }

  render() {
    return (
      <Text>
        This list should add the next number to the list when button is pressed: {JSON.stringify(this.props.list)}
      </Text>
    )
  }
}


/////
// Do not change anything above this line
/////

export default class Bug extends React.Component {
  state = {
    list: [],
  }

  addNumber() {
    const newList = this.state.list.push(this.state.list.length)
    this.setState({list: newList})
  }

  render() {
    return (
      <View>
        <ListText list={this.state.list} />
        <Button title="Increment" onPress={() => this.addNumber} />
      </View>
    )
  }
}
