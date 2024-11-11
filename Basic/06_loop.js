// FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log(`i = ${i}`);
}

// FOR IN LOOP
const person = { // WITH OBJECT
    name: "Alice",
    age: 25,
    city: "New York",
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

const colors = ["red", "green", "blue"]; // WITH ARRAY
for (let index in colors) {
    console.log(`${index}: ${colors[index]}`);
}

// FOR OF LOOP
let word = "Hello";
for (let letter of word) {
    console.log(letter);
}

let names = ['Alex', 'Stella', 'Stan'];
for (let name of names) {
    console.log(name);
}

// WHILE LOOP
let count = 0;
while (count <= 5) {
    console.log(count);
    count++;
}

// DO WHILE LOOP
count = 0;
do {
    console.log(count);
    count++;
} while (count <= 5);


