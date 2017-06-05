"use strict";


define(function(){
	let sum = function(x, y){
		return x + y;
	};

	let sub = function(x, y){
		return x - y;
	};

	let math = {
		findSum: function(a,b){
			return sum(a,b);
		},
		findSub: function(a,b){
			return sub(a,b);
		},
	};

	return math;
});