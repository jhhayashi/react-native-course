function printOne() {
  console.log('one')
}

function printTwo() {
  console.log('two')
}

function printThree() {
  console.log('three')
}

// this may not print in the order that you expect, because of the way the JS
// function queue works
setTimeout(printOne, 1000)
setTimeout(printTwo, 0)
printThree()
