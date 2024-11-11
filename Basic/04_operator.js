console.log("Arithmetic Operator");
let a = 10;
let b = 5;
console.log(`a + b = ${a + b}`); // Addition -> 15
console.log(`a - b = ${a - b}`); // Subtraction -> 5
console.log(`a * b = ${a * b}`); // Multiplication -> 50
console.log(`a / b = ${a / b}`); // Division -> 2
console.log(`a % b = ${a % b}`); // Modulus -> 0
console.log()

console.log("Increment Operator");
a = 10;
console.log(`a++ = ${a++}`);   // Post Increment -> 10 (a is now 10)
a = 10;
console.log(`++a = ${++a}`);   // Pre Increment -> 11 (a is now 11)
b = 5;
console.log(`b-- = ${b--}`)    // Post Decrement -> 5 (b is now 5)
b = 5;
console.log(`--b = ${--b}`);   // Pre Decrement -> 4 (b is now 4)
console.log()

console.log("Assignment Operator");
let x = 5;
x += 2;  // x = x + 2 -> 7
console.log(`x = x + 2 = ${x}`);
x -= 1;  // x = x - 1 -> 6
console.log(`x = x - 1 = ${x}`);
x *= 3;  // x = x * 3 -> 18
console.log(`x = x * 3 = ${x}`);
x /= 6;  // x = x / 6 -> 3
console.log(`x = x / 6 = ${x}`);
x %= 2;  // x = x % 2 -> 1
console.log(`x = x % 2 = ${x}`);
console.log()

console.log("Comparison Operator");
a = 99; // number
b = '99'; // string
console.log(`a = 99 is ${typeof a}`);
console.log(`b = '99' is ${typeof b}`);
console.log(`a == b -> ${a == b}`);  // Equal to -> true
console.log(`a != b -> ${a != b}`);  // Not equal to -> false
console.log(`a === b -> ${a === b}`); // Strict equal to -> false
console.log(`a !== b -> ${a !== b}`); // Strict not equal to -> true
console.log(`a > b -> ${a > b}`);   // Greater than -> false
console.log(`a < b -> ${a < b}`);   // Less than -> false
console.log(`a >= b -> ${a >= b}`);  // Greater than or equal to -> true
console.log(`a <= b -> ${a <= b}`); // Less than or equal to -> true
console.log()

console.log("Logical Operator");
a = true;
b = false;
console.log(`a && b = ${a && b}`); // Logical AND -> false
console.log(`a || b = ${a || b}`); // Logical OR -> true
console.log(`!a = ${!a}`);     // Logical NOT -> false
console.log()

console.log("Bitwise Operator");
a = 5;  // 0101 in binary
b = 3;  // 0011 in binary
console.log(`a & b = ${a & b}`);  // AND -> 1 (0001)
console.log(`a | b = ${a | b}`);  // OR -> 7 (0111)
console.log(`a ^ b = ${a ^ b}`);  // XOR -> 6 (0110)
console.log(`~a = ${~a}`);     // NOT -> -6 (bitwise inversion)
console.log(`a << 1 = ${a << 1}`); // Left shift -> 10 (1010)
console.log(`a >> 1 = ${a >> 1}`); // Right shift -> 2 (0010)
console.log()

console.log("Ternary Operator");
let age = 20;
console.log(`age greater than 18? -> ${(age >= 18) ? "Adult" : "Minor"}`); // "Adult"
console.log()

console.log("Type Operator");
console.log(`"Hello" -> ${typeof "Hello"}`); // "string"
console.log(`42 -> ${typeof 42}`);      // "number"
console.log(`true -> ${typeof true}`);    // "boolean"
let obj = null;
console.log(`obj instanceof Object -> ${obj instanceof Object}`); // false (null is not an instance of any object)
let str = 'Hello';
console.log(`str instanceof String -> ${str instanceof String}`); // false (str is not an instance of any String)
let strObj = new String('Hello');
console.log(`strObj instanceof String -> ${strObj instanceof String}`); // true (strObj is an instance of String)
console.log()

console.log("Spread Operator");
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(`arr1 -> ${arr1}`);
console.log(`arr2 -> ${arr2}`);
console.log();

console.log("Rest Operator");

// rest using array
function f(x, y, ...extraNums) {
    console.log(`x = ${x}`);
    console.log(`y = ${y}`);
    console.log(`extra added -> ${extraNums}`);
    // console.log(`extra[0] = ${extraNums[0]}`);
    // console.log(`extra[1] = ${extraNums[1]}`);
    let extraAdd = extraNums.reduce(r); // add extraNums to sum using reduce method
    return x + y + extraAdd;
}

function r(previousElement, nextElement) {
    return previousElement + nextElement;
}

console.log(`Sum = ${f(5, 10, 15, 20)}\n`);

// rest using object
let prop = {
    color: "magenta",
    bg_color: "blueviolet",
    text_color: "white",
    title_color: "black"
}
let {color, ...rest} = prop;
console.log(color) // magenta
console.log(rest)  // { bg_color: 'blueviolet', text_color: 'white', title_color: 'black' }

let propUpdate = {
    ...prop,
    color: "pink",
    bg_color: "violet",
}
console.log(propUpdate);
console.log();

console.log("Optional Chaining Operator");
let user = {
    name: "Maxim",
    address: {
        city: "LA"
    }
};
console.log(user?.address?.city); // "LA"
console.log(user?.phone?.number); // undefined (no error thrown)
console.log();

console.log("Nullish Coalescing Operator");
let p;
let q = p ?? "default"; // If view is null or undefined then print default
console.log(q);
console.log();

console.log("Comma Operator");
let n = (2, 3, 4);
console.log(`n = ${n}`); // 4









