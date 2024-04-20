const person = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'Teacher',
    ['Roy', 'Peter', 'Steven']
];

const types = [];

for(let i = 0; i < person.length; i++) {
// Reading from person array
    console.log(person[i], typeof person[i]);
// Filling the types array
    types[i] = typeof person[i];
    types.push(typeof person[i]);
}
console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);


// continue and break
console.log('---ONLY STRINGS----');
for(let i = 0; i < person.length; i++) {
    if(typeof person[i] !== 'string') continue;

    console.log(person[i], typeof person[i]);
}

console.log('---BREAK WITH NUMBER----');
for(let i = 0; i < person.length; i++) {
    if(typeof person[i] === 'number') break;

    console.log(person[i], typeof person[i]);
}

