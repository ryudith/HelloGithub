"use strict";

function calculateFactorial(n=0){
	if (n == 0) return 1;

	return n * calculateFactorial(n - 1);
}


let fn = calculateFactorial(4);
console.log(fn);