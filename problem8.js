// Given a number, count how many numbers below it are multiples of EITHER 3 OR 5

// Then, sum those multiples together



// Ex: sumMultiples(10) -> 3 + 5 + 6 + 9 -> returns 23

// Ex: countOdd(5) -> 1, 3 -> returns 2


var sumMultiples = function(n) {
  const nums = [];
    for (let i = 0; i < n; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)){
            nums.push(i);
            console.log(nums);
        }
    };
    return nums.reduce((total, current) => {
        return total + current;
    }, 0);
}

sumMultiples(15);

const newNums = [1, 2, 3];

const check  = newNums.reduce((total, current) => {
    console.log(total + current);
});


//  freemote answer.. count down from number with while loop
var sumMultiples = function(n) {
    var sum = 0;
      while(n--) { // 9, 8, 7...
          if (n % 3 === 0 || n % 5 === 0) {
              sum += n;
          }
      }
      return sum;
  }

  