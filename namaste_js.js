// Hoisting in JavaScript 🔥(variables & functions) | Namaste JavaScript Ep. 3

// Example 1

/**

console.log(x) // undefined
console.log(getName()) // Namaste JS
console.log(getSurame) // undefined
console.log(getSurame()) // getSurname is not a fucnction
console.log(getSurame2) // undefined
console.log(getSurame2()) // getSurname2 is not a fucnction
console.log(y) // not defined
var x = 2 // it is var
function getName () {
  console.log('Namaste JS')
}
var getSurame = () => {
  console.log('Surname it is')
}
var getSurame2 = function () {
  console.log('Surname it is')
}
console.log(x) // 2

 */

// undefined vs not defined in JS 🤔 | Namaste JavaScript Ep. 6

// Example 1
console.log(a) // undefined
var a = 7
console.log(a) // 7
console.log(x) // not defined
