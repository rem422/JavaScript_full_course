// STRING CONCATINATION
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const currentYear = new Date().getFullYear();

const jonas = "I'm " + firstName + ", a " + (currentYear - birthYear) +" years old " + job + '!';
console.log(jonas);

// TEMPLATE LITERALS
const jonasNew =`I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

// Multiline strings in template literals
console.log(`
    String with \n\
    multiple \n\
    line
`);

console.log(`
    String
    with
    multiple 
    lines
`);
