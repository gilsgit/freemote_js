// Array Methods
let nums = [1, 2, 3];

// concat
const numTwo = [4, 5, 6];
console.log(nums.concat(numTwo));
// does not modify org array

// slice
console.log(nums.slice(1));
console.log(nums.slice(0, 2));
console.log(nums.slice(-2));

// pop, push  (add remove from end)
// modifies org array
let num = nums.pop();
console.log(num);
nums.pop();
console.log(num);
nums.push(2);
console.log(nums);

// shift, unshift (add remove from beginning)
console.log(nums);
nums.push(3);
num = nums.shift();
nums.shift();
console.log(nums, num);

// splice (will modify orginial) modifying arrays causes problems.. use methods that don't modify original
const new_nums = [1, 2, 3];
const deleted = new_nums.splice(1);
console.log(deleted);


// higher order

// find

// some, every

// forEach

// map

// filter