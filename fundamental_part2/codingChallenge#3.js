///////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMI's! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meters).

1. For each of them, create an object with properties for their full name, mass, and height  (Mark Miller and John Smith).
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the heighest BMI, together with  the full name and the respective BMI. Example: 'John's BMI (28.3) is higher than Mark's (23.9)!'

TEST DATA: Marks weight 78kg and is 1.69m tall. John weights 92kg and is 1.95m tall.
 */

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

        calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if(mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI ${mark.bmi} is heigher than ${john.fullName}'s ${john.bmi}`);
} else if(john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI ${john.bmi} is heigher than ${mark.fullName}'s ${mark.bmi}`);
} else {
    console.log(`${john.fullName}'s BMI ${john.bmi} is the same as ${mark.fullName}'s ${mark.bmi}`);
}
