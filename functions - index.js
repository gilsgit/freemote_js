// functions
// DRY don't repeat yourself
// convert and input into an output
// inner scope will over ride outer scope but not reassign it

// function statement

function addTwo(num) {  // parameter (block scoped)
    const twoAdded = num + 2;
    return twoAdded;
    // return num + 2;
};

const myNum = addTwo(1); // calling the function with 1 as the argument
console.log(myNum);

