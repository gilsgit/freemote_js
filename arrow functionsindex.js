//  arrow functions

const addTwo = (num) => {
    return num + 2;
};

const addBothNums = (first, second) => first + second;

const doubleUntilOver1000 = num => {
    while (num < 1000) {
        num *= 2
    }
    return num;
};


console.log(addTwo(2));

console.log(addBothNums(2, 2));

console.log(doubleUntilOver1000(50));