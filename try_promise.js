'use strict';

let Promise = require('promise')

new Promise(function(resolve, reject){
	/*setTimeout(function(){
		resolve(10);
	}, 3000);*/
	resolve(20);
}).then(function(num){
	console.log('first then : ', num);
	return num * 2;
}).then(function(num){
	console.log('second then : ', num);
	return num * 2;
}).then(function(num){
	console.log('last then : ', num);
});

console.log('\n\n');

new Promise(function(resolve, reject){
	resolve('test');
}).then(function(msg){
	console.log(msg);
	return msg + ' 1';
}).then(function(msg){
	console.log(msg);
	return msg + ' 2';
}).catch(function(err){
	console.log(err);
});



console.log('\n\n');



let q = require('q'), a = 1, b = 2;
function addVal (a, b) {
	console.log('abc');
	return (a + b);
}

let add = q.nbind(addVal);  // this not working when use .then function
q.fcall(function(){
	return addVal(a, b);
}).then(function(res){
	console.log('cdf');
	console.log(res);
	return res + 1;
}, function(err){
	console.log(err);
}).then(function(res){
	console.log(res);
	return res + 1;
});