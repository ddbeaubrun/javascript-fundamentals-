// Get the area of a rectangle 
// length * Width 


                     // Parameters: what do we need for the user
function areaOfRectangle (len, wid) {
    area = len * wid
    return area;
}

                            // Arguments 
console.log(areaOfRectangle(10,5));

// area of a cube l * w * h

function areaOfCube (l, w, h) {
    area = l * w * h
    return area;
}

area = areaOfCube(6,8,9);
console.log(`This cube is ${area} cubic feet.`);


// Area = x + y
function squareOfNumber(l) {
    return l ** 2;
}

console.log(squareOfNumber(3));


areaOfMySandBox = areaOfRectangle(5,5)

console.log(areaOfMySandBox)

// converting cel to farth

function celToFarth(cel) {
    Fahrenheit = (cel * 9/5) + 32;
    return Fahrenheit;
}

console.log(celToFarth(-60));

function footballPoints (wins, draws, losses) {
    wins *= 3
    draws *= 1;
    losses *=0;
    
    points = wins + draws + losses;
    return points;
}

console.log(footballPoints(3,4,2));