// length
let text = 'Javascript';
console.log(text.length); // length: 10

// access characters
let chars = 'Javascript';
console.log(chars[0]); // J
console.log(chars[4]); // s
console.log(chars[9]); // t
console.log(chars.charAt(0)); // J
console.log(chars.charAt(4)); // s
console.log(chars.charAt(9)); // t

// concatenation
let str1 = new String("Hello");
let str2 = new String(" World");
console.log(str1.concat(str2)); // Output: Hello World

let first = 'Hi';
let second = 'alexa';
console.log(first + " " + second); // using + operator
console.log(`${first} ${second}`); // using template literal

// upper and lower case
let name = "Alexa";
console.log(name.toLowerCase());
console.log(name.toUpperCase());

// trim
let sent = "    this will trim the sentence.     ";
console.log(sent.trim());

// includes
let greet = "hey, what are you doing?";
console.log(greet.includes("hey")); // true
console.log(greet.includes("where")); // false

// slice
let print = "Javascript is for web";
console.log(print.slice(0, 12)) // 0: include | 12: exclude
console.log(print.slice(-7)); // reverse start from 1 | bew rof: for web

// substring
console.log(print.substring(0, 12));

// replace
let str = "hi, maxim";
console.log(str);
console.log(str.replace('maxim', 'alexa'));

// split
let food = "Panner Butter Masala, Butter Naan, Butter Milk";
console.log(food.split("")); // split each character array
console.log(food.split(",")) // split after every comma
console.log(food.split(" ")); // split after every space

// template literal from multiple lines
let msg = `hi,
alexa. 
Your painting 
is great!`;
console.log(msg);

// escape characters
let example = 'He said, "It\'s a sunny day!"';
console.log(example);

// padding
let num = "5";
console.log(num.padStart(3, "0")); // Output: "005"
console.log(num.padEnd(5, "0"));   // Output: "500"


