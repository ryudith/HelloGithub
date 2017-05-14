"use strict";


// escaping larger code points
console.log('escaping larger code points : ');
console.log('\uD83D\uDE91');
console.log('\u{1F691}');
console.log('');



// codePointAt() method
console.log('codePointAt() method : ');
console.log('\uD83D\uDE91'.codePointAt(1));
console.log('\u{1F691}'.codePointAt(1));
console.log('hello'.codePointAt(2));
console.log('');



// String.fromCodePoint() method
console.log('String.fromCodePoint() : ');
console.log(String.fromCodePoint(0x61, 0x62, 0x63));
console.log(String.fromCodePoint(0x61, 0x62) == '\u0061\u0062');
console.log('');



// repeat() method
console.log('repeat() method : ');
console.log('a'.repeat(6));
console.log('');



// includes() method
console.log('includes() method : ');
console.log('Hi, I am a JS developer'.includes('JS'));
console.log('Hi, I am a JS developer'.includes('JS', 13));
console.log('');



// startsWith() method
console.log('startsWith() method : ');
console.log('Hi, I am a JS developer'.startsWith('Hi, I am'));
console.log('Hi, I am a JS developer'.startsWith('JS developer', 11));
console.log('');



// endsWith() method
console.log('endsWith() method : ');
console.log('Hi, I am JS developer'.endsWith('JS developer'));
console.log('Hi, I am JS developer'.endsWith('JS', 13));
console.log('');



// normalization
console.log('normalization : ');
console.log('\u00E9');
console.log('e\u0301');

let a = '\u00E9'.normalize(), b = 'e\u0301'.normalize(), i = 0;
console.log(a == b);
console.log(a.length);
console.log(b.length);

for (i = 0; i < a.length; i++) {
	console.log(a[i]);
}

for (i = 0; i < b.length; i++) {
	console.log(b[i]);
}
console.log('');



// template strings
console.log('template strings : ');

let str1 = `hello!!!`, str2 = 'hello!!!';
console.log(str1 === str2);

a = 20, b = 10;
let c = 'JavaScript', str = `My age is ${a+b} and i love ${c}`;
console.log(str);

let tag = function (strings, ...values) {
	let result = '';
	console.log(values);

	for (let i = 0; i < strings.length; i++) {
		result += strings[i];

		if (i < values.length) {
			result += values[i];
		}
	}

	return result;
}

str2 = tag`My age is ${a+b} and i love ${c}`;
console.log(str2);
console.log('');



// multiline string
console.log('multiline string : ');
a = `1
2
3`;
console.log(a);
console.log('');



// raw string
console.log('raw string : ');
let s = String.raw`xy\n${1 + 1}z`;
console.log(s);

tag = function (strings, ...values) {
	return strings.raw[0];
}
str = tag`hello \n world !!!`;
console.log(str);
console.log('');