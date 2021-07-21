
const asyncFn = async() => {
    for (let i = 0; i < 999999999; i++) {
        console.log(".");
    }
}
final();

// const final = () => {
function final() {
  console.log("above the loop");
  asyncFn()
  console.log("below the loop");
}


