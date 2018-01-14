// functions are hoisted
hoistedFunction()

// but only if they are declared as functions and not as variables initialized to
// anonymous functions
console.log("typeof butNotThis: " + typeof butNotThis)

function thisShouldWork() {
    console.log("functions are hoisted")
}

var butNotThis = function() {
    console.log("but variables aren't")
}
