// hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Rem Simiyu';
let job = 'Software Engineer';
const year = new Date().getFullYear();

// hoisting with functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
};

var addExpr = function(a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}


var x = 1;
let y = 2;
const z = 3;

console.log(x, y, z);
// console.log(x === window.x);
// console.log(x === window.y);
// console.log(x === window.z);
