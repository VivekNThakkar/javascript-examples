// prototype of function. "printVivekAtTheEnd" function will be available on all the functions
Function.prototype.printVivekAtTheEnd = function () {
    this() // "this" points to the function
    console.log('Vivek')
}

const count = () => {
    console.log('This is count function')
}

// count();
count.printVivekAtTheEnd()

//
// const arr = ['Vivek', 'Thakkar']
// arr.__proto__ => Array.prototype
// arr.__proto__.__proto__ => Object.prototype
// arr.__proto__.__proto__.__proto__ => null

// const obj = {}
// obj.__proto__ => Object.prototype
// obj.__proto__.__proto__ => null

// const fun = function() {}
// fun.__proto__ => Function.prototype
// fun.__proto__.__proto__ => Object.prototype

// Everything in JS is nothing but an object
