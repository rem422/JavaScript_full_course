'use strict';

//PROBLEM
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem
// - What is teprature amplitude? Answer: difference between the highest and the lowest temp.
// - How to compute the max and the min tempratures?
// - What's a sensor error? And what to do?

// 2) Breaking it into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = temps => {
    let max = temps[0];
    let min = temps[0];

for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
}
    console.log(max, min);
    return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2
// Function should now recieve 2 arrays of temps

// 1) Understand the problem
// - With 2 arrays, should we impliment same functionality twice? NO! just merge  two arrays

// 2) Breaking it into sub-problems
// - Merge 2 arrays?

const calcTempAmplitudeNew = (t1, t2) => {

    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
}
    console.log(max, min);
    return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);