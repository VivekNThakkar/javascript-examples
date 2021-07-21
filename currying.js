/**
 * Currying using bind method
 */

const multiply = (x, y) => {
  console.log(x * y);
};

let multipleByTwo = multiply.bind(this, 2);
multipleByTwo(5); // 10

let multipleByThree = multiply.bind(this, 3);
multipleByThree(5); // 15

let multipleByFour = multiply.bind(this, 4, 10);
multipleByFour(5); // 40 => 4 * 10 '.' here 5 will act as the 3rd arg

/**
 * Currying using function  closures
 */

let multiplyNew = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByTwoNew = multiplyNew(2);
multiplyByTwoNew(5); // 10 // here inner function forms a closure with the x.
