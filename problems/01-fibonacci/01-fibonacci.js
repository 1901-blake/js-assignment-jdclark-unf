/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    // The nth member of a Fibonacci sequence, fib(n) is defined 
    // by Binet's formula as:
    //
    //    fib(n) ≈ (phi^n - psi^n) / sqrt(5)]
    //
    // where: phi = (1 + sqrt(5)) / 2
    // and:   psi = (1 - sqrt(5)) / 2
    //
    let phi = (1 + Math.sqrt(5)) / 2;
    let psi = (1 - Math.sqrt(5)) / 2;
    let phiN = Math.pow(phi, n);
    let psiN = Math.pow(psi, n);

    return Math.round((phiN - psiN) / Math.sqrt(5));    
}

for (let i = 0; i < 20; i++) {
    console.log(`The ${i}th Fibonacci number is: ${fib(i)}`);
}