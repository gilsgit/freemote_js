const nums = [-1, 3, 7, 12];


var sumOfPositive = function(num) {
    nums.forEach(num => {
        if(num > 0){
            num =  num + num;
        }
        console.log(num);
    });
}

sumOfPositive(nums);