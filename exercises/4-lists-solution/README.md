# Lists Solution
In lecture we talked about scrolling views and a couple types of performant
virtualized lists ([`FlatList`](https://facebook.github.io/react-native/docs/flatlist.html)
and [`SectionList`](https://facebook.github.io/react-native/docs/sectionlist.html)).

The goal of this exercise is to get used to the change in paradigm between normal
views that render all of their children and these virtualized lists that take
data and a renderer.

## Installation
This exercise was bootstrapped using the [Expo XDE](https://docs.expo.io/versions/latest/introduction/xde-tour.html).
To run it, open this directory as a project in the XDE.

## Exercise
For this exercise, you will be writing a component that allows easy viewing of
objects. This should be created using a `SectionList`, where the section headers
are the object keys and the rows are the values. For values that are primitives,
display them in a single row. For arrays, display multiple rows. No need to worry
about any other types (objects, functions, etc.).

## Challenge
If you want a challenge, try adding a view to add/modify these key/value pairs.

  - There should be two inputs, one for key and one for value
  - Adding a new key should add that key/value pair to the object
  - If the key exists and the value was a primitive, the new value should overwrite the old
  - If the key exists and the value was an array, the new value should be added to the beginning of the original array

Hint: Use [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
to parse strings into JS values.
