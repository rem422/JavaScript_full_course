/* Operators - basically allows us to transform values or combine multiple values, and do all kinds of work with values.

Types of operators:
1. Mathematical operators
2. Logical operators
3. Comparison operators
4. Assignment operators
*/ 

// Math operators
const currentYear = new Date().getFullYear();
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;
console.log(ageJonas, ageSarah);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 *2
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// Concatination
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operator
let x = 10 + 5;
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=, ==, ===
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(currentYear - 1991 > currentYear - 2018);