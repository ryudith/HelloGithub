"use strict";

let obj = {"name":"John", "age":23};
let name, age;

({name, age} = obj);
console.log(name);
console.log(age);


let obj2 = {"name":"Johnny", "age":23};
let x, y;

({name:x, age:y} = obj2);
console.log(x);
console.log(y);