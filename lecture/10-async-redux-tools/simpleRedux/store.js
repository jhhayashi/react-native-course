class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer
    this.state = initialState
  }

  getState() {
    return this.state
  }

  dispatch(update) {
    this.state = this.reducer(this.state, update)
  }
}

const merge = (prev, next) => Object.assign({}, prev, next)

const reducer = (state, update) => merge(state, update)

const store = new Store(reducer)
store.dispatch({foo: 'foo'})
store.dispatch({bar: 'bar'})
store.dispatch({foo: 'baz'})

console.log(store.getState())
