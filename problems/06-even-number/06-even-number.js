/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    if((someNum / 2) === Math.floor(someNum / 2)) {
        return true;
    } else {
        return false;
    }
}

for (let i = 0; i <= 10; i++) {
    if (isEven(i)) {
        console.log(`${i} is even.`);
    } else {
        console.log(`${i} is odd.`);
    }
}
