// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
// sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.

// a) Write a function printFibonacci() using setInterval that outputs a number in
// the Fibonacci sequence every second.
function printFibonacci() {
    let num1 = 0;
    let num2 = 1;
    function output() {
        console.log(num1);
        const nextNum = num1 + num2;
        num1 = num2
        num2 = nextNum;
    };
    setInterval(output, 1000);
};

printFibonacci();

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// calls to do the same thing
function printFibonacciTimeouts() {
    let num1 = 0;
    let num2 = 1;
    function output() {
        console.log(num1);
        const nextNum = num1 + num2;
        num1 = num2
        num2 = nextNum;
        setTimeout(output, 1000)
    };
    output();
};

printFibonacciTimeouts();

// c) Extend one of the above functions to accept a limit argument, which tells it how many
// numbers to print before stopping.
function printFibonacciLimit(limit) {
    let num1 = 0;
    let num2 = 1;
    counter = 0;
    function output() {
    if (counter >= limit) { 
        return; 
    }

console.log(num1);
const nextNum = num1 + num2;
num1 = num2
num2 = nextNum;
counter++;
setTimeout(output, 1000)
};
output();
}
printFibonacciLimit(5);