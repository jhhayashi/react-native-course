/* eslint-disable */

import reducer from './reducer'
import * as actions from './actions'

const DEFAULT_STATE = {
  user: {},
  contacts: [],
}

describe('contact reducer', () => {
  it('successfully adds new user', () => {
    expect(reducer(DEFAULT_STATE, actions.addContact({
      name: 'test user',
      phone: '1234567890',
    }))).toMatchSnapshot()
  })
})

describe('user reducer', () => {
  it('successfully updates user', () => {
    expect(reducer(DEFAULT_STATE, actions.updateUser({
      name: 'test user',
    }))).toMatchSnapshot()
  })
})
