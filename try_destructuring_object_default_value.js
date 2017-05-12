"use strict";

let {a, b, c = 3} = {a:"1", b:"2"};
console.log(a);
console.log(b);
console.log(c);