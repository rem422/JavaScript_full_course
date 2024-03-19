// hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Rem Simiyu';
let job = 'teacher';
const year = new Date().getFullYear();

// hoisting with functions
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
};

var addExpr = function(a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;




