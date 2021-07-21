const n = 8; // 4 Fibonacci numbers

let a = 0,
  b = 1,
  c;
for (let i = 1; i <= n; i++) {
  console.log(a);
  c = a + b;
  // a = b + c;
  a = b;
  b = c;
}

// 0 1 1 2 3 5 8 13
