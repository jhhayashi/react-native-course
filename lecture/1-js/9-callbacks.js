// this is a HOF that invokes the function argument on 1
function doSomethingWithOne(callback) {
  return callback(1)
}

doSomethingWithOne(console.log)

// this is the same thing, but done asynchronously
function doSomethingWithOneAsync(callback) {
  setTimeout(() => callback(1), 1000)
}

doSomethingWithOneAsync(console.log)

// this simulates a database call that returns an object representing a person
function getUserFromDatabase(callback) {
    // simulates getting data from db
    setTimeout(() => callback({firstName: 'Jordan', lastName: 'Hayashi'}), 1000)
}

// this is a function that greets a user, which we pass as a callback to getUserFromDatabase
function greetUser(user) {
  console.log('Hi, ' + user.firstName)
}

getUserFromDatabase(greetUser)
