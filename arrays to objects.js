// arry to objct
// fruits in a database

const fruits = [
    'orange', 'orange', 'apple', 'orange', 'apple', 'pear'
];
// {orange: 3, apple: 2, pear:1}
const fruitCounts = {};
for (let fruit of fruits) {
   console.log(fruitCounts);
   if(fruitCounts[fruit]){
    fruitCounts[fruit]++;
   }else{
    fruitCounts[fruit] = 1;
   }
}
console.log(fruitCounts);


// array to  object II
// creating a simple 'map'
const users = [
    {username: 'aaron', fullName: 'Aaron Jack', description: 'Software developer'},
    {username: 'jan', fullName: 'Jan Frey', description: 'Shopify developer'},
    {username: 'igor', fullName: 'Igor Kalishnakov', description: 'Massage Therapist'},
]


const usersMap = {};
for (let user of users){
    console.log(user.username);
    usersMap[user.username] = user;
}
console.log(usersMap.aaron);

// array to object III
// creating a complex map

const tweets = [
    {day: 'Monday', text: "I'm tired"},
    {day: 'Monday', text: "Need coffee"},
    {day: 'Tuesday', text: "Feeling better"},
    {day: 'Friday', text: "Ready to party"},
    {day: 'Friday', text: "Lost my phone..."}
]
// {Monday: [text1, text2], Tuesday: [text3]...}

const tweetsByDay = {};
for (let tweet of tweets){
    console.log(tweet.day);
    console.log(tweet.text);
    if(tweetsByDay[tweet.day]){
        tweetsByDay[tweet.day].push(tweet.text)
    } else {
        tweetsByDay[tweet.day] = [tweet.text]
    }
};
console.log(tweetsByDay);

