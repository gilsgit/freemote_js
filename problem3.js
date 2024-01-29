const nums = [1, -2, 3, 4];


var sumOfPositive = function(nums) {
    var sum = 0;
    for (var num of nums) {
        if (num > 0) {
            sum += num;
        }
    }
   return sum;
}

console.log(sumOfPositive(nums));