'use strict';


console.log('Class by JSON : ');
let Student1 = {
	name: 'Mark 1',
	printName: function () {
		console.log(this.name);
	}
};

Student1.printName();
console.log('');



console.log('Class by function : ');
function Student2 (name) {
	this.name = name;
}

Student2.prototype.printName = function () {
	console.log(this.name);
}

let var_1_student2 = new Student2('Mark 2'), 
	var_2_student2 = new Student2('Mark 3');
var_1_student2.printName();
var_2_student2.printName();
console.log('');



console.log('Compare class constructor with object');
let student3 = {};
console.log(student3.constructor == Object);
console.log('');



console.log('class __proto__ property : ');
let object1 = {
	name: 'Mark 4',
	__proto__:{age: 24},
}, 
	object2 = {name: 'Mark 5'},
	object3 = Object.create({age:24}, {name:{value:'Mark 6'}});
Object.setPrototypeOf(object2, {age:24});

console.log(object1.name + ' ' + object1.age);
console.log(object2.name + ' ' + object2.age);
console.log(object3.name + ' ' + object3.age);
console.log('');