"use strict";

let x = 1, y = 2;
let obj1 = {x, y};
console.log(obj1.y);


let obj2 = {
	myFunction(){
		console.log("Hello, world !!!");
	}
};
obj2.myFunction();



let obj3 = {
	["first" + "Name"] : "Johnny"
};
console.log(obj3["first" + "Name"]);