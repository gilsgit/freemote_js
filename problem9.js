// Given an array of positive and negative integers, find the number that does not have an opposite



// const nums  = [1, 2, 3];
// const ages = [14, 21, 13, 42, 50];
// const names = ["aaron", "jan", "enrique"];

// // find
// const found = nums.find(num =>{
//     if (num > 2) {
//         return true;
//     }
// });
// console.log(found);

// Ex: unbalancedArray([-1, 4, 1, 5, -4]) -> 5

// Ex: unbalancedArray([12, 1, 21, -21, -1]) -> 12]

const nums = [-1, 4, 1, 5, -4];

var unbalancedArray = function(nums) {
    var sum = 0;
    for (var num of nums){
        sum += num;
    }
    return sum;
}

