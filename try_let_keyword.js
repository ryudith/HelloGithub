let glob = 123;

function insideFunction(){
	let infunc = 456;

	if (true) {
		let inifcond = 789;

		console.log('glob var : ' + glob);
		console.log('infunc var : ' + infunc);
		console.log('inifcond var : ' + inifcond);
		console.log('\n');
	}

	console.log('glob var : ' + glob);
	console.log('infunc var : ' + infunc);
	console.log('inifcond var : ' + inifcond);
	console.log('\n');
}

insideFunction();

console.log('glob var : ' + glob);
console.log('infunc var : ' + infunc);
console.log('inifcond var : ' + inifcond);