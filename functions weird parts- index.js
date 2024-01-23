// more about functions

// anonymous function
// closures

function createAddFn(n1) {
    return function(n2){
        return n1 + n2;
    }
};

// closure
var addFive = createAddFn(5);
console.log(addFive(5));
console.log(addFive(2));
