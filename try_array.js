"use strict";


// Array.from() method
console.log('Array.from() method : ');
let str = '0123', 
	obj = {number:1}, 
	arr = Array.from(str, function(value){
		return parseInt(value) + this.number;
	}, obj);
console.log(arr);
console.log('');



// Array.of() method
console.log('Array.of() method : ');
let arr1 = Array(2), arr2 = Array.of(2);
console.log(arr1, arr1.length);
console.log(arr2, arr2.length);
console.log('');



// fill() method
console.log('fill() method : ');
arr1 = [1,2,3,4], arr2 = [1,2,3,4];
let arr3 = [1,2,3,4], arr4 = [1,2,3,4], arr5 = [1,2,3,4];

arr1.fill(5);
arr2.fill(5, 1, 2);
arr3.fill(5, 1, 3);
arr4.fill(5, -3, 2);
arr5.fill(5, 0, -2);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);



// find() method
console.log('find() method');
let x = 12;
arr = [11, 12, 13];
let result = arr.find(function(value,index,array){
	if (value == this) {
		return true;
	}
}, x);
console.log(result);
console.log('');



// findIndex() method
console.log('findIndex() method : ');
result = arr.findIndex(function(value, index, array){
	if (value == this) {
		return true;
	}
}, x);
console.log(result);
console.log('');



// copyWithin() method
console.log('copyWithin() method : ');
arr1 = [1,2,3,4,5], arr2 = [1,2,3,4,5], arr3 = [1,2,3,4,5], arr4 = [1,2,3,4,5];

arr1.copyWithin(1,2,4);
arr2.copyWithin(0,1);
arr3.copyWithin(1,-2);
arr4.copyWithin(1,-2,-1);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log('');



// entries(), values(), keys() method
console.log('entries(), values(), keys() method : ');
arr = ['a', 'b', 'c'];

let entries = arr.entries();
let keys = arr.keys();

console.log(...entries);
console.log(...keys);
console.log(...arr);
console.log('');