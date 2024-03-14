'use strict';

const calcAge = (birthYear) => {
    const age = new Date().getFullYear() - birthYear;

    const printAge = (age) => {
        let output =  `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            //Creating NEW variables with same name as outer scope's variable
            const firstName = 'Steven';
            
            //Reassigning outer scope's variable
            output = 'NEW OUTPUT!';

            const str = `Oh, and you're a millenial,${firstName}`;
            console.log(str);

            const add = (a, b) => {
                return a + b;
            }
        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);
    }
    printAge(age);
    return age;
};

const firstName = 'Jonas';
calcAge(1989);
// console.log(age);
// printAge();










