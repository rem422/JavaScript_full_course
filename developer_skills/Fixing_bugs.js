const measureKelvin = () => {
    const measurement = {
        type: 'temp',
        unit: 'celsius',

        //C) FIXED IDENTIFY THE BUG
        value: Number(prompt('Degrees Celsius:')),
};

//B) FIND THE BUG
    console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
}
// A) IDENTIFY THE BUG
console.log(measureKelvin());



