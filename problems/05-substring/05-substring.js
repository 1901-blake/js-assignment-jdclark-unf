/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    try {
        return `${someStr.slice(startIndex, endIndex)}`;
    }
    catch(e) {
        return 'Invalid input';
    }
}
// good input
console.log(substring('Supercalifragilisticexpialidocious', 3, 15));

// bad input
console.log(substring(5, 0, 1));