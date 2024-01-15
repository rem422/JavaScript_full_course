const person = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'Teacher',
    ['Roy', 'Peter', 'Steven']
];

for(let i = person.length - 1; i >= 0; i--) {
    console.log(i, person[i]);
}

for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----------Starting exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️`);
    }
}




