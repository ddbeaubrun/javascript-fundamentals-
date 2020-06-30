/*
Make a tip calculator using a function
That takes in the BILL (number)
Have it RETURN the TIP (number)
Capture that returned TIP in a VARIABLE
Print that variable
*/

let tip = (total) => {
    return total * 0.2;
}

let tipAmount = tip(50);

console.log(tipAmount);


/*
let tip = (total) => total * 0.2; // shorthand
*/