// const jonas = {
//     name : 'Jonas',
//     year : '1989',

//     calcAge: function() {
//         return new Date().getFullYear() - this.year;
//     }
// }

// console.log(jonas.calcAge());


console.log(this);

const calcAge = function(birthYear) {
    console.log(new Date().getFullYear() - birthYear);
    console.log(this);
}

calcAge(2000);

const calcAgeArrow = (birthYear) => {
    console.log(new Date().getFullYear() - birthYear);
    console.log(this);
}

calcAgeArrow(1996);