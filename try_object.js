"use strict";


// __proto__ properties
console.log('__proto__ properties : ');
let a = {a:12, __proto__:{b:13}};

console.log(a.a);
console.log(a.b);
console.log('');



// Object.is() method
console.log('Object.is() method');
console.log(Object.is(0, -0));
console.log(0 === -0);
console.log(Object.is(NaN, 0/0));
console.log(NaN === (0/0));
console.log(Object.is(NaN, NaN));
console.log(NaN === NaN);
console.log('');



// Object.setPrototypeOf() method
console.log('Object.setPrototypeOf() method : ');
let x = {x:12}, y = {y:13};
Object.setPrototypeOf(y,x);

console.log(y.x);
console.log(y.y);
console.log('');



// Object.assign() method
console.log('Object.assign() method : ');
x = {x:12}, y = {y:13, __proto__:x};
let z = {z:14, get b(){return 2;}, q:{}}

Object.defineProperty(z, 'z', {enumerable:false});
let m = {};
Object.assign(m, y, z);

console.log(m.y);
console.log(m.z);
console.log(m.b);
console.log(m.x);
console.log(m.q == z.q);
console.log('');