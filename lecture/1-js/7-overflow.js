// this will recurse infinitely
function recurse() {
  console.log('recursion!')
  return recurse()
}

// this wall cause a stack overflow
recurse()
