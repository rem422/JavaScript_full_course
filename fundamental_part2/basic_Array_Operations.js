const friends = ['Michael', 'Steven', 'Peter'];

// ADD ELEMENTS
const newLength = friends.push('Jay'); // adds element to the end of the array
console.log(friends);
console.log(newLength);

friends.unshift('John') //Adds element at the beginning of the array
console.log(friends);

// REMOVE ELEMENTS
friends.pop() //Removes the last element of the array
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift() //Removes the first element of the array
console.log(friends);

console.log(friends.indexOf('Steven')); //position of an element in the array

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}



