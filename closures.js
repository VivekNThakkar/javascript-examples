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
