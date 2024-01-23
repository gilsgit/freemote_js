// conditionals (truthy, falsy, chaining, scope)


if (123) {
    console.log('truthy');
} else {
    console.log('false');
}

// 0 is falsy  
// null undefined nan are falsy

// empty arrays and objects are truthy

// conditional chaining  with && and ||  and and or
let num = 0;
let firstName = "Aaron";

if (num === 0 && firstName === "Aaron") {
    console.log('truthy');
} else {
    console.log('false');
};


if (num === 0 || firstName === "Aaron") {
    console.log('truthy');
} else {
    console.log('false');
};


// variable scope
const firstName2 = "Aaron";
const lastName = "Jack";

// variable must be created out of if statement or else not avaiable outside of the if statement block
let fullName;

if (firstName2 && lastName) {
    // create full name
    fullName = `${firstName2} ${lastName}`;
}

console.log(fullName);