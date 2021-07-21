async function kamal() {
    console.log('1');
    await kamal2();
    console.log('2');
    return 'kamal';
}

async function kamal2() {
    console.log('inside kamal 2');
    return 'kamal2';
}

console.log('before');
kamal();
console.log('after');

// before, 1, after, inside kamal2, 2
//  before, 1, 2, after, inside kamal 2

const viv = 3;
const arr = [1,2,3]; //
arr.push(4);
arr[0] = 5
console.log(arr);

const obj = {1: 2, 2: 3};
delete obj[1];
console.log(obj);