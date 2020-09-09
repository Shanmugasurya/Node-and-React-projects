var add = require('./add')   // ./add is the js file name and LHS add is a temp var
console.log("Addition : " + add.addition(10,20));  // add is the local var and addition() is the function in add.js file

var sub = require('./sub')
console.log("Subtraction : " + sub.subtraction(30,10));

var mul = require('./mul')
console.log("Multiplication : " + mul.multiplication(30,10));

var div = require('./div')
console.log("division : " + div.division(30,10));