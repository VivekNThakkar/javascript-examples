const obj1 = {
    name: 'Vivek',
    surname: {
        sur: 'thak'
    }
}

// this does the cloning on level 1 only
const obj2 = Object.assign({}, obj1);
obj2.surname.sur = 'thakkar'
console.log(obj1, obj2);