'use strict';


let q = require('q'),
	fs = require('fs');

let promise1 = new q(7),
	promise2 = q.fcall(function(){
		return 7;
	}),

	readFileQ = q.denodeify(fs.readFile),
	promise3 = readFileQ('index.php', 'utf8');

promise3.then(function(contents){
	console.log(contents);
	return readFileQ('test.js', 0);
}).then(function(contents){
	console.log(contents);
}).fail(function(err){
	console.log('fail promise run !');
	console.log(err.message);
});


function addVal (a, b) {
	console.log('inside', a , b);
	return a + b;
}
/*let addFunc = q.denodeify(addVal),
	promise4 = addFunc(1, 2);*/
return q.fcall(addVal, 1 ,2 ).then(function(res){
	console.log(res);
	return res + 1;
}).then(function(res){
	console.log(res);
	return res + 1;
});