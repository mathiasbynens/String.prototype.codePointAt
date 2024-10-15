/*! https://mths.be/codepointat v1.0.0 by @mathias */

'use strict';

var callBound = require('call-bind/callBound');
var RequireObjectCoercible = require('es-abstract/2024/RequireObjectCoercible');
var ToString = require('es-abstract/2024/ToString');
var ToIntegerOrInfinity = require('es-abstract/2024/ToIntegerOrInfinity');
var StringCharCodeAt = callBound('String.prototype.charCodeAt');

module.exports = function codePointAt(position) {
	var O = RequireObjectCoercible(this);
	var string = ToString(O);
	var size = string.length;
	var index = ToIntegerOrInfinity(position);
	// Account for out-of-bounds indices:
	if (index < 0 || index >= size) {
		return undefined;
	}
	// Get the first code unit
	var first = StringCharCodeAt(string, index);
	var second;
	if ( // check if it’s the start of a surrogate pair
		first >= 0xD800 && first <= 0xDBFF // high surrogate
		&& size > index + 1 // there is a next code unit
	) {
		second = StringCharCodeAt(string, index + 1);
		if (second >= 0xDC00 && second <= 0xDFFF) { // low surrogate
			// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
			return ((first - 0xD800) * 0x400) + second - 0xDC00 + 0x10000;
		}
	}
	return first;
};
