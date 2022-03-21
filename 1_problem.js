// sum(1)(2)(3)(4)()  => 10

function sum (a) {
  return function (b) {
    if (b !== undefined) {
      return sum(a + b)
    } else {
      return a
    }
  }
}

console.log(sum(1)(2)(3)(4)())

//
const sumNew = a => (b) => b ? sum(a + b) : a
console.log(sumNew(1)(2)(3)(4)())
