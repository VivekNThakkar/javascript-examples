/**
 * WHAT IS CURRYING?
 * Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
 * In other terms, currying is when a function — instead of taking all arguments at one time — takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed.
 */

/**
 * Currying using bind method
 */

const multiply = (x, y) => {
  console.log(x * y)
}

const multipleByTwo = multiply.bind(this, 2)
multipleByTwo(5) // 10

const multipleByThree = multiply.bind(this, 3)
multipleByThree(5) // 15

const multipleByFour = multiply.bind(this, 4, 10)
multipleByFour(5) // 40 => 4 * 10 '.' here 5 will act as the 3rd arg

/**
 * Currying using function  closures
 */

const multiplyNew = function (x) {
  return function (y) {
    console.log(x * y)
  }
}

const multiplyByTwoNew = multiplyNew(2)
multiplyByTwoNew(5) // 10 // here inner function forms a closure with the x.
