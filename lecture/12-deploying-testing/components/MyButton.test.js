/* eslint-disable */

import React from 'react'
import {Button} from 'react-native'
import renderer from 'react-test-renderer'

import MyButton from './MyButton'

const getUnderlyingButton = testInstance => testInstance.root.findByType(Button)

describe('MyButton', () => {
  it('renders', () => {
    const button = renderer.create(<MyButton />).toJSON()
    expect(button).toMatchSnapshot()
  })

  it('correctly overrides default color', () => {
    const color = 'red'
    const button = getUnderlyingButton(renderer.create(<MyButton color={color} />))
    expect(button.props.color).toBe(color)

    const color2 = 'blue'
    const button2 = getUnderlyingButton(renderer.create(<MyButton color={color2} />))
    expect(button2.props.color).toBe(color2)
  })
})
