import React from 'react'
import {Button} from 'react-native'

export default class PureButton extends React.PureComponent {
  state = {
    color: null,
  }

  componentDidUpdate() {
    this.setState({color: 'red'}) // eslint-disable-line
  }

  render() {
    return <Button {...this.props} color={this.state.color} />
  }
}
