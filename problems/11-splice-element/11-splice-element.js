/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index, numEles) {
    // Temporay array to hold elements we don't want to delete
    let tempArr = [];

    // Iterate in reverse from end of input array to desired index...
    for (let i = someArr.length; i > (index + numEles); i--) {
        // .., and copy contents to temporary array
        tempArr.push(someArr.pop());
    }
    // Iterate over desired number of elements...
    for (let i = 0; i < numEles; i++) {
        // ... and delete them from input array
        someArr.pop();
    }
    // Iterate over temporary array...
    for (let i = 0; i <= tempArr.length; i++) {
        // ... and place elements back into original array
        someArr.push(tempArr.pop());
    }

    // Send original array back to caller
    return someArr;     
}

// Testing
let myArray = ['Apple', 'Banana', 'Mango', 'Orange', 'Peach'];
console.log(`\nContents of myArray before splicing: ${myArray}`);
console.log(`\nAfter splicing 2 elements at index 1: ${spliceElement(myArray, 1, 2)}`);