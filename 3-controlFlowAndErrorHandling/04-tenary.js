

let num = 6;

// Ternary 

(num > 0) // ? = True | = false; limited but beautiful 
    ? console.log(`Yes`) 
    : console.log(`nah`); 


// Exactly this below
if (num > 0 && num < 5) {
    console.log(`Yes`);
} else if (num > 5){ 
    console.log;(`I'm greater than 5`);
} else {
    console.log(`nah`)
}

/// ============ 
(num > 0 && num < 5)
    ? console.log(`yes`)
    : (num > 5)
        ? console.log(`I'm greater than 5`)
        :console.log(`nah`);

// Challenge, write the Age IF/Else as a big ternary 
let age = 50;

(age >= 25)
    ?console.log(`Yay!  You can rent a car!`)
    : (age >= 25)
        ?console.log(`Yay!  You can drink!`)
        : (age >= 21)
            ?console.log(`Yay!  You can vote!`)
            :console.log(`Sorry about it`);