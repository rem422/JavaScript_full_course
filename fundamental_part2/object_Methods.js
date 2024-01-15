const person = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDrversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 -birthYear;
    // }

    // calcAge: function() {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${this.hasDrversLicense ? 'a': 'no'} driver's license`;
    }
};

console.log(person.calcAge());

console.log(person.age);
console.log(person.age);
console.log(person.age);


// Challenge
// 'Jonas is a 46 years old teacher, and he has a drivers license'
console.log(person.getSummary());
