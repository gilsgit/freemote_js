// foor loops

// increment the index
// iteration 
// break
// var then conditional then incrementer - usually only condition will change
for (let i = 0; i < 10; i++) {
    console.log(i);
}

const firstName = "Aaron";
// count all 'a's in a string

let aCount = 0;

for (let i = 0; i < firstName.length; i++ ){
    let char = firstName[i];
    console.log(char);
    if (char === 'a' || char === 'A'){
        aCount++;
    }
}

console.log(aCount);

