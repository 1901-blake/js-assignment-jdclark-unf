/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
  if (sumNum <= 1) {
      return 1;
  }
  else {
      return sumNum * factorial(sumNum - 1);
  }
}
// Print factorial products of numbers 1 to 10
// 1! = 1, 2! = 2, 3! = 6, 4! = 24, etc.
for (let i = 1; i < 11; i++) {
    console.log(`${i}! = ${factorial(i)}`);
}