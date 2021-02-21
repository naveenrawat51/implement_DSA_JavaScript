// using recursion
let fibonacciCounter = 0;
function fibonacci(n) {
    fibonacciCounter++;
    if (n < 2) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

// dynamic Programming
let fibonacciCounterDP = 0;
function fibonacciDP() {
    const cache = {};
    return function fibonacci(n) {
        fibonacciCounterDP++;
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
                return cache[n];
            }
        }
    };
}

console.log(fibonacci(7), fibonacciCounter);
const fib = fibonacciDP();
console.log(fib(7), fibonacciCounterDP);
