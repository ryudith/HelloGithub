'use strict';


class Monitor {
	constructor (brandName='DELL', resolution='720x1400') {
		this.brandName = brandName;
		this.resolution = resolution;
	}

	printBrandName () {
		console.log(this.brandName);
	}

	printResolution () {
		console.log(this.resolution);
	}
};


export default Monitor;