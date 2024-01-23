const measureKelvin = () => {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //C) FIXED IDENTIFY THE BUG
      // value: Number(prompt('Degrees Celsius:')),
    value: 10
  };

  //B) FIND THE BUG
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY THE BUG
console.log(measureKelvin());


// Using a debugger
const calcTempAmplitudeBug = (t1, t2) => {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
// A) IDENTIFY THE BUG
console.log(amplitudeBug);
