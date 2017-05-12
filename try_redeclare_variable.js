"use strict";

let globVar = 'this is global variable';


function callFunction(){
	let globVar = 're-declare variable';
	console.log(globVar);
}

console.log(globVar);
callFunction();
console.log(globVar);