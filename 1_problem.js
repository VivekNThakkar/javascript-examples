// sum(1)(2)(3)(4)()  => 10

function sum(a) {
    return function(b) {
        if(b != undefined) {
            return sum(a+b);
        } else {
            return a;
        }
    }
}

console.log(sum(1)(2)(3)(4)())