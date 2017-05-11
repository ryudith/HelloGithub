"use strict";


function myFunction({name="John", age=25, profession="designer"}){
	console.log(name, age, profession);
}

myFunction({name:"Johnny", age:23});