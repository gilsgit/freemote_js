// type detection and conversion

const myNum = "123";

if (typeof myNum === 'number'){
    console.log("it's a number");
} else if (typeof myNum === 'string'){
    console.log("it's a string");
}

const myArr = [1,2,3];

// arrays
if (Array.isArray(myArr)){
    console.log('array?');
}

console.log(isNaN(NaN));

// converting types

let newNum = "234";

if (typeof newNum !== 'number'){
    //convert to number
    newNum = Number(newNum);
    // or newNum = +newNum;
}

console.log(typeof newNum, newNum);

let newNum2 = 123;

if (typeof newNum2 !== 'string'){
    //convert to number
    newNum2 = String(newNum2);
    // newNum2 = myNum2.toString();
}

console.log(typeof newNum2, newNum2);
