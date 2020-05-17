'use strict';

var codePointAt = require('../');
var test = require('tape');

var runTests = require('./tests');

test('as a function', function (t) {
	runTests(codePointAt, t);

	t.end();
});
