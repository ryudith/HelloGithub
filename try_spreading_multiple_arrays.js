"use strict";

let arr1 = [1];
let arr2 = [2];
let arr3 = [...arr1, ...arr2, ...[3,4]];
let arr4 = [5];

function myFunction(a=0, b=0, c=0, d=0, e=0){
	return a + b + c + d + e;
}

let result = myFunction(...arr3, ...arr4);
console.log(result);