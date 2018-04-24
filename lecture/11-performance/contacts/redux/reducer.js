import {combineReducers} from 'redux'

import contacts from '../contacts'

import {CHANGE_FIRST_CONTACT, UPDATE_USER, UPDATE_CONTACT, LOG_IN_FULFILLED, LOG_IN_REJECTED} from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)

const contactReducer = (state = contacts, action) => {
  if (action.type === UPDATE_CONTACT) return [...state, action.payload]
  if (action.type === CHANGE_FIRST_CONTACT) {
    const [firstContact, ...rest] = state
    if (!firstContact) return state
    const newContact = {...firstContact, name: 'Jordan Hayashi'}
    return [newContact, ...rest]
  }
  return state
}

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return merge(state, action.payload)
    case UPDATE_CONTACT:
      return merge(state, {prevContact: action.payload})
    case LOG_IN_FULFILLED:
      return merge(state, {token: action.payload})
    case LOG_IN_REJECTED:
      return merge(state, {loginErr: action.payload})
    default:
      return state
  }
}

const reducer = combineReducers({
  user: userReducer,
  contacts: contactReducer,
})

export default reducer
