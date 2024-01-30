// Given a string, count the vowels and return that count



// Ex: countVowels("adsbecdei") -> a, e, e, i -> 4

// Ex: unbalancedArray("ffjnkjnj") -> no vowels -> 0




var countVowels = function(s) {
  
    var counter = 0;
      for (var char of s) {
          if (char === 'a' || char === 'e' || 
              char === 'i' || char === 'o' || char === 'u') {
                  counter++;
          }
      }
      return counter;
    
  }
  
  

  countVowels("adsbecdei");