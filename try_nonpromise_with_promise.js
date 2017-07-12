'use strict';

let q = require('q');
q.fcall(function(){
	setTimeout(function(){
		console.log('print from function non promise');
	}, 3000);
	
	console.log('print from inside promise');
	return '123';
	
}).then(function(res){
	console.log('print from then promise');
	console.log(res);
	
});