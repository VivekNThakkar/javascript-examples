// try {
//   const m = 1
//   const n = m + z
//   console.log(n)
// } catch (err) {
//   console.log(err.name)
// }

// const user = {
//   hello: 'heyy',
//   welcome () {
//     console.log(this.hello)
//   }
// }
// setTimeout(user.welcome.bind(user), 1000)

console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
Promise.resolve(3).then(console.log)
console.log(4)
