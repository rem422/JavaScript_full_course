const person = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'],
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

// const interestedIn = prompt('What do you want to know about this person? Choose between firstName, lastName, age, job and friends');


// if (person[interestedIn]) {
//     console.log(person[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// }

// Adding new properties to object using dot notation and bracket notation

person.location = 'USA';
person['twitter'] = '@user123'
console.log(person);

// Challenge
// 'Jonas has 3 friends, and his best friend is called Michael'
console.log(`${person.firstName} has ${person.friends.length} friends and his best friend is called ${person.friends[0]}`);


