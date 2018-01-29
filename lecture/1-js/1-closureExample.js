function makeHelloFunction() {
  var message = 'Hello!'

  function sayHello() {
    console.log(message)
  }

  return sayHello
}

const sayHello = makeHelloFunction()

// the variable called message is not in scope here
console.log('typeof message:', typeof message)
// but the function sayHello still references a variable called message
console.log(sayHello.toString())

// because of the closure, sayHello still has access to the variables within scope
// when it was declared
sayHello()
