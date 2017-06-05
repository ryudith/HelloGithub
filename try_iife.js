"use strict";

// module start
(function(window){
	let sum = function(x, y){
		return x + y;
	}

	let sub = function(x, y){
		return x - y;
	}

	let math = {
		findSum: function(a, b){
			return sum(a,b);
		},

		findSub: function(a, b){
			return sub(a,b)
		},
	};

	window.math = math;
})(window);
// module end


console.log(math.findSum(1,2));
console.log(math.findSub(1,2));