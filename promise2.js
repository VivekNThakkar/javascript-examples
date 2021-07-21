const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
      resolve(fileName)
  })
}

console.log('vivek');
getFile('/etc/passwd')
.then(data => console.log(data))
.catch(err => console.error(err))