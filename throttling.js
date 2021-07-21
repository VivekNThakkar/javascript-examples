// Throttling in Javascript

const getData = (searchText) => {
  // calls an API and gets data
  console.log("Fetching data..", searchText);
};

const throttle = function (fn, limit) {
  let flag = true; // every time inner function is called, we wont reinitialize this flag again and again
  return function (...args) {
    if (flag) {
      //   fn();
      fn.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterFunction = throttle(getData, 2000);
