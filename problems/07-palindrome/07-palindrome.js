/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    // Create an empty array to hold string
    let stringArray = [];

    // loop through and copy string to array
    for (let i = 0; i < someStr.length; i++) {
        stringArray.push(someStr.charAt(i));
    }

    // If array is the same forwards and backwards, string is a palindrome
    if (stringArray.join() === stringArray.reverse().join()) {
        return `${someStr} is a palindrome`
    } else {
        return `${someStr} is not a palindrome`
    }
}

console.log(isPalindrome('ABBA'));
console.log(isPalindrome('AVID DIVA'));
console.log(isPalindrome('RACECAR'));
console.log(isPalindrome('PALINDROME'));
console.log(isPalindrome('MADAME'));
