// Can create a custom thing

let person1 = {
    name: `Macy`,
    age: 24,
    canVote: true
}

let person2 = {
    name: `Nicholas`,
    age: 56,
    canVote: true
}


let person3 = {
    name: `Argyle`,
    age: 15,
    canVote: false
} 

//function createPerson (name, age, canVote) {
    //let person = {
       // name: name,
       // age: age,
       // canVote: canVote
   // }

    //return person;
//}

function Person (name, age, canVote) {
    this.name = name;
    this.age = age;
    this.canVote = age >= 18;

    this.greeting = () => `Hello, my name is ${this.name}`;

    return 'abc'
}

// Instance of a Person object 
person1 = new Person('Macy', 24, true);

console.log(person1.age);

let macyJones = new Person('Macy, 24, true');
abc = Person('abc', 22, false);


console.log(macyJones instanceof Person);

let seth = new Person(`Seth`, 54);
let troy = new Person(`Troy`, 12);

console.log(seth.greeting())
console.log(troy.greeting())
