const remmy = {
    firstName: 'Remmy',
    year: 2000,
    calcAge: function() {
        console.log(this);
        return new Date().getFullYear() - this.year;
    },
    greet: () => {
    console.log(`Hey ${this.firstName}`)
    },

    // greet: function(){
    // console.log(`Hey ${this.firstName}`)
    // },
};
remmy.greet();

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function() {
//         // console.log(this);
//         return new Date().getFullYear() - this.year;
        
//     // SOLUTION 1
//     // const self = this; //self or that
//     // const isMillenial = function() {
//     //     console.log(self);
//     //     console.log(this.year >= 1981 && this.year <= 1996);
//     //     console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // SOLUTION 2
//     const isMillenial = () => {
//         console.log(self);
//         console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//     },
// };
// jonas.calcAge();

// Arguments keyword
const addExpr =  function(a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b
};
addArrow(2, 5, 8);