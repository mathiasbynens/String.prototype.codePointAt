/*! https://mths.be/codepointat v1.0.0 by @mathias */

'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return String.prototype.codePointAt || implementation;
};
