// Debouncing in Javascript

const getData = (searchText) => {
  // calls an API and gets data
  console.log("Fetching data..", searchText);
};

const debounce = function (fn, delay) {
  let timer; // common variable which will store the reference of setTimeout. whenever the below function is called, this timer is clearedout and new settimeout is set
  return function (...args) {
    console.log("args", args);
    let context = this;
    let arguments = args;
    clearTimeout(timer);
    timer = setTimeout(() => {
      //   fn();
      //   fn.apply(context, arguments);
      fn.call(context, ...arguments);
    }, delay);
  };
};

const betterFunction = debounce(getData, 2000);
// we'll now call betterFunction => a function returned by debounce function
