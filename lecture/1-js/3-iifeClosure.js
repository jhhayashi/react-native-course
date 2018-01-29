// we can create a closure around each anonymous function pushed to the array by
// turning them into IIFEs
function makeFunctionArray() {
  const arr = []

  for (var i = 0; i < 5; i++) {
    arr.push((function (x) {
      return function () { console.log(x) }
    })(i))
  }

  return arr
}

const functionArr = makeFunctionArray()

// this now logs 0 as expected
functionArr[0]()
