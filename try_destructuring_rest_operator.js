"use strict";

let [a, ...b] = [1,2,3,4,5,6];
console.log(a);
console.log(Array.isArray(b));
console.log(b);
console.log('');


[a, , , ...b] = [1,2,3,4,5,6];
console.log(a);
console.log(b);