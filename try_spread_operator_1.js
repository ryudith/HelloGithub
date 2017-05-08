"use strict";

let arr = [1, 4];

function addNumber(a=1, b=1){
	return a + b;
}

let result = addNumber(...arr);
console.log(result);