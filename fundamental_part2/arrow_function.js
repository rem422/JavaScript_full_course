// FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//     return new Date().getFullYear() - birthYear;
// }

// ARROW FUNCTION
const calcAge3 = birthYear => new Date().getFullYear() - birthYear;
console.log(calcAge3(2000));

const yearsUntilRetirement = (firstName, birthYear) => {
    const  age = new Date().getFullYear() - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement}`;
}
console.log(yearsUntilRetirement('Rem', 2000));
console.log(yearsUntilRetirement('Bob', 1980));