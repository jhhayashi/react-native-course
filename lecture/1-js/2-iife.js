// this creates the same closure as in 1-closureExample.js, but doesn't pollute
// the global scope with a function called makeHelloFunction like that example
const sayHello = (function () {
  var message = 'Hello!'

  function sayHello() {
    console.log(message)
  }

  return sayHello
})()

// IIFEs can also be used to create variables that are inaccessible from the global
// scope
const counter = (function() {
  let count = 0

  return {
    inc: function() { count = count + 1 },
    get: function() { console.log(count) },
  }
})()

counter.get()
counter.inc()
counter.get()
