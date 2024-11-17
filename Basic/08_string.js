// strings are typically created as primitives
let primitiveString = "Hello";
console.log(`primitive string -> ${primitiveString}`);

let stringObject = new String("Hello");
console.log(`string object -> ${stringObject}`);

// check type
console.log(typeof primitiveString); // string
console.log(typeof stringObject); // object

// defining string
let singleQuote = '\'string using single quote\'';
console.log(singleQuote);

let doubleQuote = "\"string using double quote\"";
console.log(doubleQuote);

let templateLiteral = `\`string using template literal\``;
console.log(templateLiteral);

