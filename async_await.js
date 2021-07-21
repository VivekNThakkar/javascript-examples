// const doSomethingAsync = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("I did something"), 0);
//   });
// };

/**
 * Prepending the async keyword to any function means that the function will return a promise.
 * Even if it's not doing so explicitly, it will internally make it return a promise.
 */

const doSomethingAsync2 = async () => {
  console.log("inside");
  return "Vivek";
};

const doSomethingAsync3 = () => {
  console.log("inside");
  return Promise.resolve("Vivek");
};

// doSomethingAsync2 is same as doSomethingAsync3

const doSomething2 = async () => {
  console.log(await doSomethingAsync2());
  console.log(await doSomethingAsync2());
};

// const doSomething = async () => {
//   console.log(await doSomethingAsync());
// };

console.log("Before");
// doSomething();
doSomething2();
console.log("After");
