/* 2. Bubble Sort
Define function: bubbleSort(sortedArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    // bubbleSort algorithm, in short:
    //   1. Set swap counter to zero and iterate over each element in array
    //   2. If array[i] > array[i+1], swap their positions, and increment swap counter
    //   3. Otherwise, move on to next element
    //   4. After one full iteration, if swap counter remains at zero, then elements
    //      should be arranged in order from lowest value to highest, and we can exit.
    //   5. Otherwise, go back to step 1.
    let sortedArray = numArray;
    let swapCounter;

    do {
        swapCounter = 0;

        for (let i = 0; i < sortedArray.length; i++) {
            if (sortedArray[i] > sortedArray[i+1]) {
                let temp = sortedArray[i];
                sortedArray[i] = sortedArray[i+1];
                sortedArray[i+1] = temp;
                swapCounter++;
            }
        }
    } while(swapCounter > 0);

    return sortedArray;
}

let arr = [1, 5, 2, 3, 0, 4, 7, 25, 100, 89, 63];

console.log(`Unsorted array = ${arr}`);
console.log(`Sorted array = ${bubbleSort(arr)}`);