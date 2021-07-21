function vivek1(...args) {
    console.log('arguments', arguments);
    console.log('args', args);
}

const vivek2 = (...args) => {
    console.log('args2', args);
}

vivek1(1,2);
vivek2(1, 2)