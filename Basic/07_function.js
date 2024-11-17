// FUNCTION DECLARATION
function simple() {
    console.log("function declaration");
}
simple();

// FUNCTION EXPRESSION
let print = function () {
    console.log("function expression");
}
print();

// ARROW FUNCTION
let sum = (num1, num2) => {
    return num1 + num2;
};
console.log(sum(1, 4));

// IMMEDIATELY INVOKED FUNCTION EXPRESSION
(
    function () {
        console.log("immediately invoked function expression");
    }
)
();

// IMMEDIATELY INVOKED FUNCTION EXPRESSION WITH ARROW FUNCTION
(() => {
    console.log("immediately invoked function expression with arrow function");
})
();

// FUNCTION WITH PARAMETERS AND RETURN VALUE
function avg(x, y) {
    return (x + y) / 2;
}
let ans = avg(2, 4);
console.log(ans);

// FUNCTION WITH DEFAULT PARAMETER
function def(defaultParameter = "Hi") {
    console.log(`${defaultParameter}, Alexa`);
}
def(); // Hi, Alexa
def("Hello"); // Hello, Alexa

// ANONYMOUS FUNCTION
setTimeout(function () {
    console.log("This runs after 1 seconds.");
}, 1000);

// HIGHER ORDER FUNCTION
function count(x, y, anotherFunction) {
    console.log(`x -> ${x}`); // 2
    console.log(`y -> ${y}`); // 5
    console.log(anotherFunction); // another function takes multiplyFunction as an arguments
    return anotherFunction(x, y);
}
let multiplyFunction = (a, b) => {
    console.log(`a -> ${a}`); // 2
    console.log(`b -> ${b}`); // 5
    return a * b;
}
console.log(count(2, 5, multiplyFunction));

// RECURSIVE FUNCTION
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

// CALLBACK FUNCTION
function f1(callbackFunction) {
    console.log(callbackFunction); // callbackFunction takes f2 as an argument
    console.log(`Hi, alexa`);
    f2();
}
function f2() { // callback function
    console.log(`Bye, alexa`);
}
f1(f2); // call function






