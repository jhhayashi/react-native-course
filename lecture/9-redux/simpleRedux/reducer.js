const merge = (prev, next) => Object.assign({}, prev, next)

const reducer = (state, update) => merge(state, update)

let state = {}
state = reducer(state, {foo: 'foo'})
state = reducer(state, {bar: 'bar'})
state = reducer(state, {foo: 'baz'})

console.log(state)
