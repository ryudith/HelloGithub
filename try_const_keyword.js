"use strict";

const a = 2;

function insideFunc(){
	const b = 3;

	if (true) {
		const c = 4;
		console.log(a);
		console.log(b);
		console.log(c);
	}

	console.log(a);
	console.log(b);
	console.log(c);
}

insideFunc();
console.log(a);
console.log(b);
console.log(c);