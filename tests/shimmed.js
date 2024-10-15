'use strict';

var codePointAt = require('../');
codePointAt.shim();

var test = require('tape');
var defineProperties = require('define-properties');
var callBind = require('call-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(String.prototype.codePointAt.length, 1, 'String#codePointAt has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(String.prototype.codePointAt.name, 'codePointAt', 'String#codePointAt has name "codePointAt"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(String.prototype, 'codePointAt'), 'String#codePointAt is not enumerable');
		et.end();
	});

	runTests(callBind(String.prototype.codePointAt), t);

	t.end();
});
