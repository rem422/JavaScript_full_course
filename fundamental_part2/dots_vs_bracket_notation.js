const person = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Roy', 'Peter', 'Steven'],
};

console.log(person);
// Dot notation
console.log(person.lastName);
// Bracket Notation
console.log(person['firstName']);

const nameKey = 'Name';
console.log(person['first' + nameKey]);
console.log(person['last' + nameKey]);

// console.log(person.'last' + nameKey);






