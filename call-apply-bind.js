//You CANNOT call/apply/bind arrow functions,


/**
 * Call:  call method is used to invoke a function directly by passing in the reference which points to the "this" variable inside the function. 
 */

let name = {
    firstname: 'Vivek',
    lastname: 'Thakkar',
    printName: function() {
        console.log(`${this.firstname} ${this.lastname}`);
    }
}

name.printName(); // Vivek Thakkar

let name2 = {
    firstname: 'Viv',
    lastname: 'Thak'
}

// argument will point to the "this" in the function
name.printName.call(name2); // "this" will be pointing to name2



const printState = function() {
    console.log(`State: ${this.state}`);
}

let dummy = {
    state: 'maharashtra'
}
printState.call(dummy);




const printCountry = function() {
    console.log(`Country: ${this}`);
}

let country = 'India'
printCountry.call(country);


const printEverything = function(hometown, state) {
    console.log(`${this.firstname} ${this.lastname}. hometown: ${hometown}, State: ${state}`);
}

let name3 = {
    firstname: 'Vivek',
    lastname: 'Thakkar'
}

printEverything.call(name3, 'Mumbai', 'Maharashtra');

/**
 * Apply: apply is exactly same as call method, only diff between apply and call is the apply takes 2nd arg as an array list of the parameteres that needs to be passed in the function
 */
printEverything.apply(name3, ['Mumbai', 'Maharashtra']);



/**
 * bind: bind method is exactly same as call method. only dfference is: instead of directly calling the method here, the bind method binds the method and retuns us the copy of the method for future use (can be invoked later). 
 */
let printBind = printEverything.bind(name3, 'Mumbai', 'Maharashtra');
printBind();
