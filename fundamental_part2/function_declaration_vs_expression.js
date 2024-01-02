'use strict'

// FUNCTION DECLARATION
const age1 = calcAge1(2000); // can be called before defining the  code
function calcAge1(birthYear) {
    return new Date().getFullYear() - birthYear;
}
// const age1 = calcAge1(2000);

// FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
    return new Date().getFullYear() - birthYear;
}
const age2 = calcAge2(1991); // can not be called before the initialization

console.log(age1, age2);