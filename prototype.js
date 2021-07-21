// prototype of function. "printVivekAtTheEnd" function will be available on all the functions
Function.prototype.printVivekAtTheEnd = function() {
    this(); // "this" points to the function
    console.log('Vivek');
}

const count = () => {
    console.log('This is count function')
}

// count();
count.printVivekAtTheEnd();