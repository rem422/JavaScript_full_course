/*
    '==='- is a strict equality operator, it does not perform type coercion so it only return to when both values are the same.

    '==' - is a loose equality operator, it does type coercion.
*/ 

const age = 18;

if (age === 18) {
    console.log('You just became an adult. (strict)');
};

if (age == 18) {
    console.log('You just became an adult. (loose)');
};

const favourite = Number(prompt('What your favourite number?'));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // '22 == 23 -> FALSE
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) {
    console.log('Why not the 23');
}
