'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Monitor = function () {
	function Monitor() {
		var brandName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'DELL';
		var resolution = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '720x1400';

		_classCallCheck(this, Monitor);

		this.brandName = brandName;
		this.resolution = resolution;
	}

	_createClass(Monitor, [{
		key: 'printBrandName',
		value: function printBrandName() {
			console.log(this.brandName);
		}
	}, {
		key: 'printResolution',
		value: function printResolution() {
			console.log(this.resolution);
		}
	}]);

	return Monitor;
}();

;

exports.default = Monitor;
