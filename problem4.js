var multiplyNumbers = function(num1, num2) {
    let result = 0;
    for (let i = 1; i <= num2; i++){
        result += num1;
    }
    return result;
}

console.log(multiplyNumbers(2, 5));