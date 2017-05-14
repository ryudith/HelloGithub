"use strict";


// Array buffers method
console.log('Array buffers method : ');
let buffer = new ArrayBuffer(80), view = new DataView(buffer);
view.setInt32(8, 22, false);

let number = view.getInt32(8, false);
console.log(number);
console.log();



// Typed arrays
console.log('Typed array : ');
buffer = new ArrayBuffer(80), view = new Float64Array(buffer);
view[4] = 11;

console.log(view.length);
console.log(view[4]);
console.log('');



// set
console.log('set : ');
let set1 = new Set('hello!!!');
set1.add(12);

console.log(set1);
console.log(set1.has('!'));
console.log(set1.size);

set1.delete(12);
console.log(...set1);
set1.clear();
console.log('');



// WeakSet
console.log('WeakSet : ');
let weakset1 = new WeakSet();

(function(){
	let a = {};
	weakset1.add(a);
})()

console.log(weakset1.size);
// console.log(...weakset1);  // exception thrown
// weakset1.clear();  // exception thrown
console.log();



// map
console.log('map : ');
let map1 = new Map(), o = {n:1};

map1.set(o, 'A');
map1.set('2', 9);

console.log(map1.has(2));
console.log(map1.get(o));
console.log(...map1);

map1.delete('2');
map1.clear();

let arrMap2 = [['1', '2'], ['4', '5']], map2 = new Map(arrMap2);
console.log(map2.size);
console.log('');



// WeakMap
console.log('WeakMap : ');
let weakMap1 = new WeakMap();

(function(){
	let o = {n:1};
	weakMap1.set(o, 'A');
})()

let s = {m:1}
weakMap1.set(s, 'B');

console.log(weakMap1.get(s));
// console.log(...weakMap1);  // exception thrown

weakMap1.delete(s);
// weakMap1.clear();  // exception thrown

let weakMap2 = new WeakMap([[{}, 2], [{}, 5]]);
console.log(weakMap2.size);
console.log('');