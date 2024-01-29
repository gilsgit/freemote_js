var countOdd = function(n) {
    // your code here
    amount = 0;
    for(let i = 0; i < n; i++) {
        if(i % 2 != 0){
            amount = amount + 1;
        }
    }
    return amount;
  }

  console.log(countOdd(5));