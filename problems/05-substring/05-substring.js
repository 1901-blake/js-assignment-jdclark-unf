/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    try {
        if (typeof(someStr) !== 'string') {
            throw new TypeError('First parameter must be a string');
        } else if (typeof(startIndex) !== 'number') {
            throw new TypeError('Second parameter must be a number');
        } else if (typeof(endIndex) !== 'number') {
            throw new TypeError('Third parameter must be a number');
        } else {
            return `${someStr.slice(startIndex, endIndex)}`;
        }        
    }
    catch(e) {
        return `${e.name}: ${e.message}`;      
    }
}
// good input
console.log(`\nTest 1: string = 'Supercalifragilisticexpialidocious', start = 0, end = 15
Result: ${substring('Supercalifragilisticexpialidocious', 0, 15)}`);

// good input
console.log(`\nTest 2: string = 'Larry, Moe, Curly', start = 7, end = 10
Result: ${substring('Larry, Moe, Curly', 7, 10)}`);

// bad input (first parameter not a string)
console.log(`\nTest 3: string = 4, start = 0, end = 2
Result: ${substring(4, 0, 2)}`);

// bad input (second param not a number)
console.log(`\nTest 4: string = 'test', start = null, end = 3
Result: ${substring('test', null, 3)}`);

// bad input (third paraneter not a number)
console.log(`\nTest 5: string = 'foobar', start = 3, end = 'end'
Result: ${substring('foobar', 3, 'end')}`);