"use strict";

// code from ES5
/*function myFunction(a, b){
	var args = Array.prototype.slice.call(arguments, myFunction.length);
	console.log(args);
}*/

// code from ES6
function myFunction(a,b, ...args){
	console.log(args);
}

myFunction(1,2,3,4,5);