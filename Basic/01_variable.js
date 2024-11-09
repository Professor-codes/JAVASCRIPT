// VAR, LET, CONST

// GLOBAL SCOPE
// CAN BE REDECLARED
var name = 'java';
{
    var name = 'script';
    console.log(`var(block) - ${name}`);
}
console.log(`var - ${name}`);

// LOCAL SCOPE
// CAN'T REDECLARED
let value = 10;
{
    let value = 20;
    console.log(`let(block) - ${value}`);
}
console.log(`let - ${value}`);

// LOCAL SCOPE
// CON'T REDECLARED
const pi = 3.14;
console.log(`const - ${pi}`);
