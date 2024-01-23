// functions
// DRY don't repeat yourself
// convert and input into an output
// inner scope will over ride outer scope but not reassign it
//hoisting

// function statement

//  when code is run all functions will be moved to the top
// hoisting
// so function could be at bottom of file

function addTwo(num) {  // parameter (block scoped)
    const twoAdded = num + 2;
    return twoAdded;
    // return num + 2;
};

// function expression differnet way to write functions
const addThree = function(num){
    return num + 3;
};

const secondNum = addThree(5);
console.log(secondNum);