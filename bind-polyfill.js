/**
 * Bind
 */
let name = {
  firstname: "Vivek",
  lastname: "Thakkar",
};

let printName = function (state, country, continent, world) {
  console.log(
    this.firstname + " " + this.lastname + " " + state + " " + country + " " + continent + " " + world
  );
};

let printMyName = printName.bind(name, "Maharashtra", "India", "Asia");
printMyName("World");

/**
 * Custom bind => myBind
 */

Function.prototype.myBind = function (...args) {
  // here args will be an array
  let obj = this; // this will refer to the function.
  return function (...args3) {
    let args2 = args.slice(1);
    obj.call(args[0], ...args2, ...args3);
    obj.apply(args[0], [...args2, ...args3])
  };
};

let printMyName2 = printName.myBind(name, "Maharashtra", "India", "Asia");
printMyName2("World");
