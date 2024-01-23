// objects

const user = {
    name: "Aaron", 
    age: 27,
    hasJob: false,
    socialMedia: {
        twitter: "twitter.com",
        facebook: ""
    }
};

console.log(user.name); // dot syntax
console.log(user['name']); // string literal indexing
const key = 'name';
console.log(user[key]); // variable syntax

console.log(user.age);
user.age = 28;
console.log(user.age)

// chaining
console.log(user.socialMedia.twitter);
user.socialMedia.twitter = "www.twitter.com/freemote";
console.log(user.socialMedia.twitter);


// document is an object - represents the webpage
// there are methods attached to this object
