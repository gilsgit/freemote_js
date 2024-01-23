// for OF loops
// Declarative loop (vs imperative loop)
//arrays
// great for just geting the values and not the index

const names = ["Aaron", "Jan", "Enrique"];

for (let name of names) {
    console.log(name);
};

const firstName = "Aaron";

for (let char of firstName){
    console.log(char);
};

// for IN loops
// Loop over Objects

const user = {
    name: "Aaron",
    age: 27
}

for (let key in user){
    console.log(key);
    console.log(user[key]);
};