// NOTE: this doesn't work as a node script, since they are run as modules
// `this` in this case is equal to module.exports, which is an empty object
console.log(this)

// this logs the global object
function whatIsThis() {
  console.log(this)
}

whatIsThis()

// =======================================

const person = {
  name: 'Jordan',
  greet: function() { console.log('Hi, ' + this.name) }
}

person.greet() // Hi, Jordan

// =====================================

const friend = {
  name: 'David',
}

friend.greet = person.greet

friend.greet() // Hi, david

// ====================================

const greetPerson = person.greet

greetPerson() // Hi, undefined

// make greetPerson() work, but not in node
this.name = 'Global'

// browser console or node REPL: Hi, Global
// node script: Hi, undefined
greetPerson()

const reallyGreetPerson = person.greet.bind(person)
reallyGreetPerson() // Hi, Jordan

person.greet.call({name: 'Yowon'}) // Hi, Yowon
person.greet.apply({name: 'Raylen'}) // Hi, Raylen

// ====================================

const newPerson = {
  name: 'Jordan',
  // arrow notation binds `this` lexically
  greet: () => console.log('Hi, ' + this.name)
}

newPerson.greet() // Hi, Global

// bound functions cannot be bound again
newPerson.greet.call(person) // Hi, Global
