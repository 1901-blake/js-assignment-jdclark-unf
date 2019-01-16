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
    return stringArray.reverse.toString;
}

let myString = "This assignment was too easy";

console.log(`Forward: "${myString}"`);
console.log(`Reverse: ${reverseStr(myString)}`);
