"use strict";


// trigonometry related operation
console.log('trigonometry related operation : ');
console.log(Math.sinh(0));
console.log(Math.cosh(0));
console.log(Math.tanh(0));
console.log(Math.asinh(0));
console.log(Math.acosh(1));
console.log(Math.atanh(0));
console.log(Math.hypot(2, 2, 1));
console.log('');



// arithmetic related operation
console.log('arithmetic related operation : ');
console.log(Math.log2(16));
console.log(Math.log10(1000));
console.log(Math.log1p(0));
console.log(Math.expm1(0));
console.log(Math.cbrt(8));
console.log('');



// miscellaneous methods
console.log('miscellaneous methods : ');
console.log('imul function : ', Math.imul(590, 5000000));
console.log('64-bit floating-point multiplication : ', (590 * 5000000));

console.log('clz32(7) function : ', Math.clz32(7));
console.log('clz32(1000) function : ', Math.clz32(1000));
console.log('clz32(295000000) function : ', Math.clz32(295000000));

console.log('sign(11) function : ', Math.sign(11));
console.log('sign(-11) function : ', Math.sign(-11));
console.log('sign(0) function : ', Math.sign(0));

console.log('trunc(11.17) function : ', Math.trunc(11.17));
console.log('trunc(-1.112) function : ', Math.trunc(-1.112));

console.log('fround(0)', Math.fround(0));
console.log('fround(1)', Math.fround(1));
console.log('fround(1.137)', Math.fround(1.137));
console.log('fround(1.5)', Math.fround(1.5));