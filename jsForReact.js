// Class and Inheritance
class Human {
    constructor() {
        this.gender = "male";
    }
    printGender() {
        console.log(this.gender);
    }
};
class Person extends Human {
    constructor() {
        super();
        this.name = 'Max';
    }
    printName() {
        console.log(this.name)
    }
};
const person = new Person();
person.printGender();
person.printName();

// Spread
const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4]
console.log(newNumbers)
const person2 = {
    name: "max"
};
const newPerson2 = {
    ...person2,
    age: 28
};
console.log(newPerson2);
const filter = (...args) => args.filter(el => el === 1);
console.log(filter(1, 2, 3));

// Destructing
const numbers2 = [1, 2, 3];
[num1, num2, num3] = numbers2;
console.log(num1, num2, num3)

// Object References
const personTest1 = {
    name: 'Max'
};
const personTest2 = personTest1;
personTest1.name = 'Min';
console.log(personTest1, personTest2)

// Object Copy
const personTest3 = {
    name: 'Max'
};
const personTest4 = {
    ...personTest3
};
personTest3.name = 'Min';
console.log(personTest3, personTest4)

// Map Function
const numArray = [1, 2, 3]
const doubleNumArray = numArray.map((num) => num * 2)
console.log(numArray)
console.log(doubleNumArray)