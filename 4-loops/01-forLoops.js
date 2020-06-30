let i = 7;

// For loop controller ie ()
// position1: Variable declaration and/or initialization 
// position2: Condition to run the loop (needs to be true)
// Position3: Incrementation or change to allow the condition to fail 


for (i = 0; i < 10; i++) {
    console.log(`nice`);
    // increment i
    // verify conditional (hop up if true, leave loop if false)
};


// Challenge: Using for a loop, console log from 0 to 20 counting by 2's
let z =[];

for (let z = 0; z <= 20; z+=2) {
    console.log(z);
};

console.log(z); //0, undefined, error, null, []


// Count from 10, to 0

for (let b = 10; b <= 0; b--) {
    console.log(b);
};

let b = 10;
for (b = 10; b >= 0; b--) {
    console.log(b);
}
console.log(b);

let name = 'PatrickStarrIsReallyCoolIWouldLikeToLiveUnderARockTooYo';
let pCharacter = name [name.length - 1];
console.log(pCharacter);


// Challenge:
// Use a far loop, create a name variable, console log each character individually
                // 01234
let challenge = 'Dimitry';

for (let x = 0; x < challenge.length; x++) {
    console.log(challenge[x]);
};

for (let c of challenge) {
    console.log(c);
}; // Same loop shorter function aka short hand looping

let invoice = [3.1, 4.1, 89.98, 3.50];
let total = 0;

for (let i = 0; i < invoice.length; i++) {
    total = total + invoice[i];
};

console.log(total);

