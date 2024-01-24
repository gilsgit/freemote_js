var getInitials = function(name) {
    splitName = name.split(" ");
    // console.log(splitName);
    firstInitial = splitName[0][0].toUpperCase();
    // console.log(firstInitial);
    secondInitial = splitName[1][0].toUpperCase();
    // console.log(secondInitial);
    
    return `${firstInitial}.${secondInitial}`;
}

getInitials("Harry Gils");


function getInitial2(name) {
    var names = name.split(' ');
    return `${names[0][0]}.${names[1][0]}`;
}

console.log(getInitial2("Harry Gils"));
