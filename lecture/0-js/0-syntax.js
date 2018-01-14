// comments are prefixed with double slashes
/*
 * Multi-line comments look like this
 */

// camelCase is preferred
// double-quotes create strings
const firstName = "jordan";

// semicolons are optional
// single-quotes also create strings
const lastName = 'Hayashi'

// arrays can be declared inline
// arrays can have multiple types (more on types later)
const arr = [
  'string',
  42,
  function() { console.log('hi') },
]

// this returns the element at the 2nd index and invokes it
arr[2]()

// this will iterate through the array and console log each element
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
