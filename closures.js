/**
function a() {
  var x = 2;
  function b() {
    console.log(x);
    // console.log('3')
  }
  return b;
}
let y = a();
y();

 */


function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
// in this case var "i" refers to same "i" always (Ssame memory location)
x() // 6 6 6 6 6

// ------------------------

function x2() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
// in this case, whenver loop runs, for each and every iteration, "i" is a new variable together (its a new copy of "i" always). since "let" is block scoped and will create a new copy everytime
// Whenever we do i++, then i=2 is a new copy of variable 
x2() // 1 2 3 4 5

// -----------------------------

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(j) {
      setTimeout((j) => {
        console.log(j);
      }, j * 1000);
    }
    close(i)
  }
}
// in this case var "i" refers to same "i" always
x() // 6 6 6 6 6