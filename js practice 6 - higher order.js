/*
 JS Practice 6
*/

/*
    Let's practice "higher order" array methods.
    (Using arrow functions is optional)

    Remember, To test a given function or method, 
    you can put it inside a console log, like so.
        >> console.log(addTwo(2));
        >> 4

    or like so with your "expected" value of 4
        >> console.log(addTwo(2) === 4)
        >> true
    this also known as a test :)
*/

var nums = [1, 2, 3, 4];

/*
    SOME and EVERY
    ☑️ write some code to check if "every" number in nums is positive
    ☑️ write some code to check if any / "some" numbers in nums are greater than 3
*/

const isPositive = nums.every((num) => {
    if(num > 0){
        return true;
    }
});
console.log(isPositive);

const greaterThanThree = nums.some((num) => {
    if(num > 3){
        return true;
    }
});
console.log(greaterThanThree);



/*
    FOR EACH number in nums
    ☑️ print out each number one at a time (use forEach, not a loop)
    ☑️ print strings formatted like so ("1 sheep", "2 sheep", "3 sheep"...) to the console
*/

nums.forEach(function(num){
    console.log(num);
    console.log(num + " sheep");
});

/*
    MAP is arguably the most commonly used higher order method
    ☑️ write some code that creates a new array, where double every number in nums is doubled
    ☑️ write some code that creates a new array, where each number is replaced by a dollar amount
        (ex ['$1.00', '$2.00', ...])
    ☑️ write some code that creates a new array, where each number is replaced by a boolean
        indicating whether it is positive or not
        (ex. [true, true, ...])
*/

const doubleArray = nums.map(function(num){
    return num * 2;
});
console.log(doubleArray);

const dollarAmount = nums.map(function(num){
    return "$" + num.toFixed(2);
});
console.log(dollarAmount);

const isBoolean = nums.map(function(num){
    if(num > 0){
        return true;
    }
});
console.log(isBoolean);


/*
    Let's FILTER things down
    ☑️ write some code that creates a filtered array where only the negative numbers remain
        (should be an empty array...)
    ☑️ write some code that creates a filtered array where only even numbers remain
        (HINT: %)
*/

const isNegative = nums.filter((num) => {
    if(num < 0){
        return num;
    }
});
console.log(isNegative);


const isEven = nums.filter((num) => {
    if(num % 2 == 0){
        return num;
    }
});

console.log(isEven);


/*
    REDUCE the complexity (warning: challenging)
    ☑️ A common use case for reduce is adding all the numbers in an array together
        can you get that sum with reduce, for this array? (result should be 10)
    ☑️ Still too easy for you? Ok.
        Try creating a single "sheep" string from all the numbers, using reduce
        result should be ("1 sheep, 2 sheep, 3 sheep...")
        (Feel free to use Google, & don't worry if you can't get this! It's very challenging)
*/

const addupAllNums = nums.reduce(function(sum, num){
    const total = sum + num;
    return total;
});

console.log(addupAllNums);

const singleSheepString = nums.reduce(function(sum, num){
    const total = sum + num;
    return total;
});




/*
    HIGHER ORDER CHAINING

    Method chaining is still scary? It's about to get scarier.
    Just kidding (kind of)

    Remember, don't use intermediary variables

    ☑️ Let's chain split, filter, and join
        >> 1. Create a string variable -- var coach = "aaron"
        >> 2. SPLIT the "coach" variable using "" (empty space)
        >> 3. FILTER out the "a" characters
        >> 4. JOIN the result back into a string, using "" (empty space)

    ☑️ Let's chain together map and reduce on "nums"
        >> 1. MAP nums to create a new array, with triple each number
        >> 2. REDUCE to add the numbers (re use your reduce code here)
*/




var coach = "aaron";

console.log(coach.split("").filter((letter) => {if(letter != "a") return letter}).join(""));


const newNumsArray = nums.map((num) => num * 3).reduce((sum, num) => {return total = sum + num});
console.log(newNumsArray);