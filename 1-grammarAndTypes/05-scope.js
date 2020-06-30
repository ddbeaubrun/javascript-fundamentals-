let myName = 'Carson';

function someProcess() {
    const myName = 'X-AESH-12';
    console.log(myName);
};

// let myName = 'potato';

// console.log(myName);

someProcess();

let y = 12;

function scopey() {
    y = 33;
    console.log(y);
}

console.log(y);
scopey();
console.log(y);

// 12,33,12 <- need to place let, var, or const to reinit
// 12, 33, 33


let slope = 12;

function varTest() {
    let slope = 56;
    if (true) {
        let slope = 9001;
        console.log(slope);
    }
    console.log(slope);
}

varTest();
console.log(slope);

// 9001, 12, 9001
// 9001, 9001, 12; correct print
// 56, 12, 56
// 12, 56, 9001
