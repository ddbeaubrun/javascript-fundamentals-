// Booleans
let isOn = true;

let isRaining = false;

// NULL; Telling that something is nothing
let empty = null;

// Undefined; no value is assigned, something never used before; will display when you're waiting for data
let undef = undefined;
console.log(undefined);

let whatAmI;
console.log(whatAmI);

// Numbers

let degrees = 90;
console.log(degrees);

let ratherLarge = 999999999999999; // This is 15 9s
console.log(ratherLarge);

let whatIsGoingOnHere = 9999999999999999; // This is 16 9s
console.log(whatIsGoingOnHere);

let notQuite = 0.2 + 0.1; //Rounding errors; floating point
console.log(notQuite);

let numbersAreHard = (0.2 *10 + 0.1 + 10) / 10;
console.log(numbersAreHard);

let created = Number('123'); // Turn 123 into the number 123
console.log(created);

 let abc = Number('z');
 console.log(abc);


 // Strings
 let stringOne = "doubledooos";
 let stringTwo = 'singleydoos';

 let first = 1050 + 100;
 let second = '150' + 100;
 let third = '1050' + '100';
 let last = '1050' + '100';
 console.log(first, second, third, last);

 let firstname = 'Dimitry';
 let lastname = 'Beaubrun';

 console.log(firstname + ' ' + lastname);

 // Escape characters; put an apostrophe maybe?
 let myMessage = '\\don\'t do this\\'
 console.log(myMessage);


// Objects

let frodo = {
  race: 'Hobbit',
  rings: 1,
  cloak: true,
  primaryWeapon: {name: 'Sting', attack: 30, damage: false },
  damage: 'poison',
  hunger:  5,       
};

console.log(typeof frodo);

let Dimitry = {
    Race: 'Black',
    Age: 2,
    Happy: true,
    Family: {name: 'Hannah', 'Elliot', 'Isaiah'},
      Hannah: 27,
      Elliot: 4,
      Isaiah: 1,
};


// Array;a variable link list

let groceryList = [
    'banana', 
    'kiwi', 
    'coconut',
    21
];

let aThing = [23, {isOn: true, electricity: 'AC'}, ['wallaby']];

console.log(aThing instanceof Array);


// Strings: Methods; adds checks and balances to code

let userTitle = '            a DaY in tHE lIFE of dev';
console.log(userTitle.toUpperCase());
console.log(userTitle.trim());
console.log(userTitle.includes('in'))

