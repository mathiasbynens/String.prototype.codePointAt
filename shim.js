/*! https://mths.be/codepointat v1.0.0 by @mathias */

'use strict';

var define = require('define-properties');

var getPolyfill = require('./polyfill');

module.exports = function shimCodePointAt() {
	var polyfill = getPolyfill();

	if (String.prototype.codePointAt !== polyfill) {
		define(String.prototype, { codePointAt: polyfill });
	}

	return polyfill;
}
