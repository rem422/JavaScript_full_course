'use strict'
// A function is simply a piece of code that we can reuse over and over again in our code.

// function logger () {
//     console.log('My name is Jonas');
//
//
// // calling/ running/ invoking
// logger();
// logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(4, 5);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); 