// while loops
// unless you know how many iterations, while loop is a good choice
// how many times to double a number before 1000

let num = 13;
let counter = 0;

while (num < 1000 ) {
    // do something
    num = num * 2;
    console.log(num);
    counter++;
};

console.log(counter);


const names = ["Aaron", "Jan", "Enrique"];

while (true) {
    const name = names.pop();
    console.log(name);
    if (name[0] === 'J') {
        console.log('found J Name!', name);
        break;
    }
};
// always need a break!!! or else you'll get an infinite loop which will crash
