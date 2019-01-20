/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

// Object literal
let object1 = {
    name: 'Methuselah',
    age: 969,
}

// Function constructor
function MyObject(name, age) {
    this.name = name;
    this.age = age;
}
let object2 = new MyObject('Mickey Mouse', 90);

// ES6 class
class MyOtherObject {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let object3 = new MyOtherObject('Bugs Bunny', 78);

// Testing
console.log(`\nobject1.name = ${object1.name}\nobject1.age = ${object1.age}`);
console.log(`\nobject2.name = ${object2.name}\nobject2.age = ${object2.age}`);
console.log(`\nobject3.name = ${object3.name}\nobject3.age = ${object3.age}`);
