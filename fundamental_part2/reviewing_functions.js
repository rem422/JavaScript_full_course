const calcAge =function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (firstName, birthYear) {
    const  age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement('Jonas', 1991));
console.log(yearsUntilRetirement('Mike', 1950));