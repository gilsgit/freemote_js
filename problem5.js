var repeatString = function(s, n) {
    // take the string and concat it number of times
    let string = "";
    for(let i = 0; i < n; i++){ 
        string = string + s;
        console.log(string);
    }    
    return string;
  }

  console.log(repeatString("B", 5));


