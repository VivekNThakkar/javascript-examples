// The executor function of a promise also runs in a synchronous manner.
const promiseA = function() {
    return new Promise((resolve, reject) => {
        console.log("Promise Created");
      
        setTimeout(() => {
            console.log("timer finished");
          resolve("timer finished");
        });
      
        console.log("exiting promise");
      });
}

const promiseB = new Promise((resolve, reject) => {
    console.log("Promise Created");
  
    setTimeout(() => {
        console.log("timer finished");
      resolve("timer finished");
    });
  
    console.log("exiting promise");
  });

console.log("im sync job");

promiseB.then((result) => {
  console.log("promise success");
});

console.log("im awesome sync job");
