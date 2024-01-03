'use strict'

// FUNCTION DECLARATION
const age1 = calcAge1(2000); // Function that can be used before it's declared.
function calcAge1(birthYear) {
    return new Date().getFullYear() - birthYear;
}
// const age1 = calcAge1(2000);

// FUNCTION EXPRESSION - Essentially a function value stored in a variable and can't be used before declaration.
const calcAge2 = function (birthYear) {
    return new Date().getFullYear() - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);