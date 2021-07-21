const fs = require("fs");

fs.readFile("vivek.txt", (err, data) => {
  console.log("data", data);
});

setTimeout(() => {
  console.log("inside");
}, 1);

setImmediate(()=>{
    console.log('immediate');
})


// inside
// data <Buffer ...

// first timers will run and then I/O