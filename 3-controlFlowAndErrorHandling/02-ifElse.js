let temperature = 75;

if (temperature < 65) {
    console.log('Wear a jacket!');
} else {
    console.log('No jacket necessary!');
};

let myName = 'Dimitry';

if (myName == 'Dimitry') {
    console.log('Hello! My name is ' + myName);//silver
    console.log(`Hello my name is ${myName}`);//silver
} else {
    console.log('What is your name?'); //bronze
    console.log('Hello, is your name ' + myName);
};


/*
CHALLENGE
************
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/


// ifElse: written else if

let age = 30;

// Older than 25, say "Yay!  You can rent a car!"
// Older than 21, but not 25, say "Hey, you can purchase alcohol"
// Older than 18, but not 21, say "Hey, you can vote!"
// Younger than 18, say "You can do stuff one day"

if (age >= 25) {
    console.log('Yay! You can rent a car!');
}   else if (age >= 21) {
    console.log('Hey, you can purchase alcohol!');
}   else if ( age >= 18) {
    console.log('Hey, you can vote!');
}   else {
    console.log('Sorry \'bout it!');// don't really need
};



