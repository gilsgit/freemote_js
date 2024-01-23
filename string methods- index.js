// String methods
const animal = "dogs are great";

// length
console.log(animal.length);

// indexOf ( find a char or substr within a str)
console.log(animal.indexOf("s"));
console.log(animal.indexOf("great"));

// slice up to but not including the end
console.log(animal.slice(4));
console.log(animal.slice(0, 4));
console.log(animal.slice(0, -5));


// toUpper / LowerCase

console.log(animal.toUpperCase());
console.log(animal.toLowerCase());


// concat
console.log(animal.concat(" (definitely)"));


// replace
console.log(animal.replace("dogs", "cats"));
console.log(animal.replace(/dogs/g, "cats")); //all instances


// split   splits into an array  removes the thing in brackets
console.log(animal.split(" "));
