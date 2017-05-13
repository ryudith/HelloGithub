"use strict";

// binary notation
let a = 0b00001111;
let b = 15;

console.log('binary notation :');
console.log(a === b);
console.log(a);
console.log('');



// octal notation
a = 0x17;  // a = 017 => error octal literals not allowed in strict mode
b = 15;
let c = 0o17;
let d = 15;

console.log('octal notation :');
console.log(a === b);
console.log(a);
console.log(c === d);
console.log(d);
console.log('');



// Number.isInteger(number) method
a = 17.0;
b = 1.2;

console.log('Number.isInteger(number) method :');
console.log(Number.isInteger(a));
console.log(Number.isInteger(b));
console.log('');



// Number.isNaN(value) method
a = "NaN";
b = NaN;
c = "hello";
d = 12;

console.log('Number.isNaN(value) method : ');
console.log(Number.isNaN(a));
console.log(Number.isNaN(b));
console.log(Number.isNaN(c));
console.log(Number.isNaN(d));

console.log(isNaN(a));
console.log(isNaN(b));
console.log(isNaN(c));
console.log(isNaN(d));
console.log('');



// Number.isFinite(number) method
console.log('Number.isFinite(number) method : ');
console.log(isFinite(10));
console.log(isFinite(NaN));
console.log(isFinite(null));
console.log(isFinite([]));

console.log(Number.isFinite(10));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(null));
console.log(Number.isFinite([]));
console.log('');



// Number.isSafeInteger(number) method
console.log('Number.isSafeInteger(number) method : ');
console.log(Number.isSafeInteger(156));
console.log(Number.isSafeInteger(1212));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));
console.log('');



// Number.EPSILON property
console.log('Number.EPSILON property : ');
console.log(0.1 + 0.2 == 0.3);
console.log(0.9 - 0.8 == 0.1);
console.log(0.1 + 0.2);
console.log(0.9 - 0.8);

function epsilonEqual(a, b){
	return Math.abs(a - b) < Number.EPSILON;
}

console.log(epsilonEqual(0.1 + 0.2, 0.3));
console.log(epsilonEqual(0.9 - 0.8, 0.1));