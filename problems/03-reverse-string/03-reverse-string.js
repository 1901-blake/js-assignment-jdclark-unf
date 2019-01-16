/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    // Create an empty array to hold string
    let stringArray = [];

    // loop through and copy string to array
    for (let i = 0; i < someStr.length; i++) {
        stringArray.push(someStr.charAt(i));
    }

    // JavaScript strings don't have a built-in 
    // reverse() method, but arrays do!
    let reversedArray = stringArray.reverse();

    // Create empty string to hold array
    let result = '';

    // Loop through and copy array to string
    for(let j = 0; j < reversedArray.length; j++) {
        result += reversedArray[j];
    }

    return result;
}

let myString = "This assignment was not as easy as I thought";

console.log(`Forward: "${myString}"`);
console.log(`Reverse: ${reverseStr(myString)}`);
