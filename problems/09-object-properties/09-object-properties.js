/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    // Iterate over properties
    for (const property in someObj) {
        console.log(` .${property}: ${someObj[property]} (${typeof(someObj[property])})`);
    }
}

let myCar = { 
    color: 'white',
    transmission: 'automatic',
    doors: 4,
    make: 'Toyota',
    model: 'Camry',
    year: '2017'
}

console.log(`\nThe properties of the myCar object are:`);
objectProperties(myCar);