// Higher order array methods
// these will make a copy of the array not modify original

const nums  = [1, 2, 3];
const ages = [14, 21, 13, 42, 50];
const names = ["aaron", "jan", "enrique"];

// find
const found = nums.find(num =>{
    if (num > 2) {
        return true;
    }
});
console.log(found);

// some, every
const hasMinors = ages.some((age) => {
    console.log(age);
    if (age < 18){
        return true;
    }
});
console.log(hasMinors);

const allOver18 = ages.every(age => {
    console.log(age);
    if (age > 18) {
        return true;
    }
});
console.log(allOver18);


// forEach
// can take all these parameters if needed but don't have to.
ages.forEach(function(age, index, arr){
    console.log(age, index, arr);
});

// map
// most usefull of all higher array functions
// allows us to modify an array in place depending on what we return
// always creates a copy
const newAges = ages.map(age => {
    if (age > 40) {
        return "boomer"
    } else {
        return "zoomer"
    }
});
console.log(newAges);

// filter
const boomers = ages.filter(age => {
    if (age > 40) {
        return true;
    }
});

const zoomers = ages.filter(age => {
    if (age < 40) {
        return true;
    }
});

console.log(zoomers, boomers);

// sort (it does work in place.. modifies orignal array)

ages.sort();
console.log(ages);
names.sort();
console.log(names);

// reduce
const result = ages.reduce((sum, age) => {
    console.log(sum, age);
    const total = sum + age;
    console.log(total);
    return total;
});


console.log([ -2, 0, 1 ].filter( num => num > 0 ));
