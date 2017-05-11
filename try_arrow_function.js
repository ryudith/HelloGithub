"use strict";

let circleArea1 = (pi, r) => {
	let area = pi * r * r;
	return area;
};

let circleArea2 = (pi, r) => pi * r * r;


let [result1, result2] = [circleArea1(3.14, 3), circleArea2(3.14, 5)];
console.log(result1);
console.log(result2);