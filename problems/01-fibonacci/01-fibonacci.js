/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    // The nth member of a Fibonacci sequence, fib(n) is defined 
    // by Binet's formula as:
    //
    //    fib(n) ≈ (Φⁿ - ϕⁿ) / √5
    //
    // where: Φ = (1 + √5) / 2
    // and:   ϕ = (1 - √5) / 2
    //
    let bigPhi = (1 + Math.sqrt(5)) / 2;
    let lilPhi = (1 - Math.sqrt(5)) / 2;
    let bigPhiN = Math.pow(bigPhi, n);
    let lilPhiN = Math.pow(lilPhi, n);

    return Math.round((bigPhiN - lilPhiN) / Math.sqrt(5));    
}

for (let i = 0; i < 20; i++) {
    console.log(`The ${i}th Fibonacci number is: ${fib(i)}`);
}