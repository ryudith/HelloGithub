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



// compare __proto__ with Object.prototype
console.log('compare __proto__ with Object.prototype : ');
let object4 = {name:'Tucker'};
console.log(object4.__proto__ == Object.prototype);
console.log('');



// compare function with constructor
console.log('compare function with constructor : ');
function Student4 () {
	this.name = 'Marking';
}
let var_1_student4 = new Student4();

console.log(var_1_student4.__proto__.constructor == Student4);
console.log(var_1_student4.__proto__ == Student4.prototype);
console.log('');



// property by proto vs by this keyword 
console.log('property by proto vs by this keyword : ');
function Student5 (name) {
	this.name = name;
}

Student5.prototype.printName = function () {
	console.log(this.name);
}

function School (name) {
	this.name = name;
	this.printName = function () {
		console.log(this.name);
	}
}

let var_1_student5 = new Student5('Mark V 1'), 
	var_2_student5 = new Student5('Mark V 2'),
	var_1_school = new School('Mark V 1 School'),
	var_2_school = new School('Mark V 2 School');

console.log(var_1_student5.printName == var_2_student5.printName);
console.log(var_1_school.printName == var_2_school.printName);
console.log('');



// implement inheritance
console.log('implement inheritance : ');
function School2 (schoolName) {
	this.schoolName = schoolName;
}

School2.prototype.printSchoolName = function () {
	console.log(this.schoolName);
};

function Student6 (studentName, schoolName) {
	this.studentName = studentName;
	School2.call(this, schoolName);
}

Student6.prototype = new School2();
Student6.prototype.printStudentName = function () {
	console.log(this.studentName);
}

let var_1_student6 = new Student6('Mark II', 'ABC School');
var_1_student6.printStudentName();
var_1_student6.printSchoolName();
console.log('');



// the constructor of primitive data types
console.log('the constructor of primitive data types : ');
let var_1_string = 'String', 
	var_2_string = new String('String');
console.log(typeof var_1_string);
console.log(typeof var_2_string);
console.log(var_1_string == var_2_string);
console.log(var_1_string.length);

console.log(var_1_string == var_2_string.valueOf());
console.log((new String(var_1_string).length));
console.log('');



// defining a class
console.log('defining a class : ');
class Student7 {
	constructor(name) {
		this.name = name;
	}
}
let var_1_student7 = new Student7('Mark III');
console.log(var_1_student7.name);

console.log(typeof Student7);
console.log(typeof School2 == typeof Student7);
console.log('');



// the class expression
console.log('the class expression : ');
let Student8 = class {
		constructor (name) {
			this.name = name;
		}
	}, 
	
	Student9 = function (name) {
		this.name = name;
	},

	var_1_student8 = new Student8('Mark IV'),
	var_1_student9 = new Student9('Mark V');
console.log(var_1_student8.name);
console.log(var_1_student9.name);
console.log('');



// the prototype methods
console.log('the prototype methods : ');
class Person1 {
	constructor (name, age) {
		this.name = name;
		this.age = age;
	}

	printProfile () {
		console.log('Name is : ' + this.name + 
			" and Age is : " + this.age);
	}
}

let var_1_person1 = new Person1('Mark VI', 12);
var_1_person1.printProfile();
console.log('printProfile' in var_1_person1.__proto__);
console.log('printProfile' in Person1.prototype);



// get and set methods
console.log('get and set methods : ');
class Person2 {
	constructor (name) {
		this.__name__ = name;
	}

	get name () {
		return this.__name__;
	}

	set name (name) {
		this.__name__ = name;
	}
}

let var_1_person2 = new Person2('Mark VII');
console.log(var_1_person2.name);

var_1_person2.name = 'John';
console.log(var_1_person2.name);

console.log('name' in var_1_person2.__proto__);
console.log('name' in Person2.prototype);
console.log(Object.getOwnPropertyDescriptor(var_1_person2.__proto__, 'name').set);
console.log(Object.getOwnPropertyDescriptor(Person2.prototype, 'name').get);
console.log(Object.getOwnPropertyDescriptor(var_1_person2, '__name__').value);
console.log('');



// generator method
console.log('generator method : ');
class MyClass1 {
	* generator_function () {
		yield 1;
		yield 2;
		yield 3;
		yield 4;
		yield 5;
	}
}

let var_1_myclass1 = new MyClass1(), generator = var_1_myclass1.generator_function();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().done);
console.log('generator_function' in MyClass1.prototype);
console.log('');



// static method
console.log('static method : ');
class Student10 {
	constructor (name) {
		this.name = name;
	}

	static findName (student) {
		return student.name;
	}
}

function Student11 (name) {
	this.name = name;
}
Student11.findName = function (student) {
	return student.name;
}

let var_1_student10 = new Student10('Mark IX'), var_1_student11 = new Student11('Mark X');
console.log(Student10.findName(var_1_student10));
console.log(Student11.findName(var_1_student11));
console.log('');



// class inheritance
console.log('class Inheritance : ');
function A (a) {
	this.a = a;
}
A.prototype.printA = function () {
	console.log(this.a);
}

class B extends A {
	constructor (a, b) {
		super(a);
		this.b = b;
	}

	printB () {
		console.log(this.b);
	}

	static sayHello () {
		console.log('hello');
	}
}

class C extends B {
	constructor (a, b, c) {
		super(a,b);
		this.c = c;
	}

	printC () {
		console.log(this.c);
	}

	printAll () {
		this.printC();
		super.printB();
		super.printA();
	}
}

let var_1_c = new C(1,2,3);
var_1_c.printAll();
C.sayHello();
console.log('');



// the computed method name
console.log('the computed method name : ');
class MyClass2 {
	static ['my' + 'Method'] () {
		console.log('hello');
	}
}
MyClass2['my' + 'Method']();
console.log();



// overriding constructor method
console.log('overriding constructor method : ');
class MyClass3 {
	constructor () {
		return Object.create(null);
	}
}

console.log(new MyClass3() instanceof MyClass3);
console.log();



// the Symbol.species static accessor property
console.log('the Symbol.species static accessor property : ');
class MyCustomArray1 extends Array {
	static get [Symbol.species]() {
		return Array;
	}
}

class MyCustomArray2 extends Array {

}

let var_arr_1 = new MyCustomArray1(0,1,2,3,4), 
	var_arr_2 = new MyCustomArray2(0,1,2,3,4);

console.log(var_arr_1 instanceof MyCustomArray1);
console.log(var_arr_2 instanceof MyCustomArray2);

let var_arr_1a = var_arr_1.map(function(value){
	return value + 1;
}), var_arr_2a = var_arr_2.map(function(value){
	return value + 1;
});
console.log(var_arr_1a instanceof MyCustomArray1);
console.log(var_arr_2a instanceof MyCustomArray2);

console.log(var_arr_1 instanceof Array);
console.log(var_arr_2 instanceof Array);
console.log();



// using @@species
console.log('using @@species : ');
class MyArray1 {
	//default @@species. Child class will inherit this property
	static get [Symbol.species]() {
		// default constructor
		return this;
	}

	mapping () {
		return new this.constructor[Symbol.species]();
	}
}

class MyArray2 extends MyArray1{
	static get [Symbol.species]() {
		return MyArray1;
	}
}

let var_myarray_2 = new MyArray2();
console.log(var_myarray_2 instanceof MyArray2);

let var_myarray_1 = var_myarray_2.mapping();
console.log(var_myarray_1 instanceof MyArray1);
console.log();



// new.target implicit parameter
console.log('new.target implicit parameter : ');
function MyConstructor () {
	console.log(new.target.name);
}
class MyClass4 extends MyConstructor {
	constructor () {
		super();
	}
}

let obj4 = new MyClass4();
let obj5 = new MyConstructor();
console.log();



// using super in the object literals
console.log('using super in the object literals : ');
let obj6 = {
	print () {
		console.log('hello');
	}
};

let obj7 = {
	print () {
		super.print();
	}
};

Object.setPrototypeOf(obj7, obj6);
obj7.print();
console.log();