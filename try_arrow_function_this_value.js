"use strict";


var obj1 = {
	f1: function(){
		console.log(this);

		var f2 = function(){
			console.log(this);
		}

		f2();
		setTimeout(f2, 1000);
	}
};

//obj1.f1();


let obj2 = {
	f1: () => {
		console.log(this);

		let f2 = () => {
			console.log(this);
		}

		f2();
		setTimeout(f2, 1000);
	}
};
obj2.f1();