'use strict';

module.exports = function (codePointAt, t) {	
	t.test('String that starts with a BMP symbol', function (st) {
		st.equal(codePointAt('abc\uD834\uDF06def', -1), undefined);
		st.equal(codePointAt('abc\uD834\uDF06def', -0), 0x61);
		st.equal(codePointAt('abc\uD834\uDF06def', 0), 0x61);
		st.equal(codePointAt('abc\uD834\uDF06def', 3), 0x1D306);
		st.equal(codePointAt('abc\uD834\uDF06def', 4), 0xDF06);
		st.equal(codePointAt('abc\uD834\uDF06def', 5), 0x64);
		st.equal(codePointAt('abc\uD834\uDF06def', 42), undefined);
		st.end();
	});

	t.test('String that starts with a BMP symbol - cast position', function (st) {
		st.equal(codePointAt('abc\uD834\uDF06def', ''), 0x61);
		st.equal(codePointAt('abc\uD834\uDF06def', '_'), 0x61);
		st.equal(codePointAt('abc\uD834\uDF06def'), 0x61);
		st.equal(codePointAt('abc\uD834\uDF06def', -Infinity), undefined);
		st.equal(codePointAt('abc\uD834\uDF06def', Infinity), undefined);
		st.equal(codePointAt('abc\uD834\uDF06def', Infinity), undefined);
		st.equal(codePointAt('abc\uD834\uDF06def', NaN), 0x61);
		st.equal(codePointAt('abc\uD834\uDF06def', false), 0x61);
		st.equal(codePointAt('abc\uD834\uDF06def', null), 0x61);
		st.equal(codePointAt('abc\uD834\uDF06def', undefined), 0x61);
		st.end();
	});

	t.test('String that starts with an astral symbol', function (st) {
		st.equal(codePointAt('\uD834\uDF06def', -1), undefined);
		st.equal(codePointAt('\uD834\uDF06def', -0), 0x1D306);
		st.equal(codePointAt('\uD834\uDF06def', 0), 0x1D306);
		st.equal(codePointAt('\uD834\uDF06def', 1), 0xDF06);
		st.equal(codePointAt('\uD834\uDF06def', 42), undefined);
		st.end();
	});

	t.test('String that starts with an astral symbol - cast position', function (st) {
		st.equal(codePointAt('\uD834\uDF06def', ''), 0x1D306);
		st.equal(codePointAt('\uD834\uDF06def', '1'), 0xDF06);
		st.equal(codePointAt('\uD834\uDF06def', '_'), 0x1D306);
		st.equal(codePointAt('\uD834\uDF06def'), 0x1D306);
		st.equal(codePointAt('\uD834\uDF06def', false), 0x1D306);
		st.equal(codePointAt('\uD834\uDF06def', null), 0x1D306);
		st.equal(codePointAt('\uD834\uDF06def', undefined), 0x1D306);
		st.end();
	});

	t.test('Lone high surrogates', function (st) {
		st.equal(codePointAt('\uD834abc', -1), undefined);
		st.equal(codePointAt('\uD834abc', -0), 0xD834);
		st.equal(codePointAt('\uD834abc', 0), 0xD834);
		st.end();
	});

	t.test('Lone high surrogates - cast position', function (st) {
		st.equal(codePointAt('\uD834abc', ''), 0xD834);
		st.equal(codePointAt('\uD834abc', '_'), 0xD834);
		st.equal(codePointAt('\uD834abc'), 0xD834);
		st.equal(codePointAt('\uD834abc', false), 0xD834);
		st.equal(codePointAt('\uD834abc', NaN), 0xD834);
		st.equal(codePointAt('\uD834abc', null), 0xD834);
		st.equal(codePointAt('\uD834abc', undefined), 0xD834);
		st.end();
	});

	t.test('Lone low surrogates', function (st) {
		st.equal(codePointAt('\uDF06abc', -1), undefined);
		st.equal(codePointAt('\uDF06abc', -0), 0xDF06);
		st.equal(codePointAt('\uDF06abc', 0), 0xDF06);
		st.end();
	});

	t.test('Lone low surrogates - cast position', function (st) {
		st.equal(codePointAt('\uDF06abc', ''), 0xDF06);
		st.equal(codePointAt('\uDF06abc', '_'), 0xDF06);
		st.equal(codePointAt('\uDF06abc'), 0xDF06);
		st.equal(codePointAt('\uDF06abc', false), 0xDF06);
		st.equal(codePointAt('\uDF06abc', NaN), 0xDF06);
		st.equal(codePointAt('\uDF06abc', null), 0xDF06);
		st.equal(codePointAt('\uDF06abc', undefined), 0xDF06);
		st.end();
	});

	var supportsStrictMode = (function () { return typeof this === 'undefined'; }());

	t.test('bad string/this value', { skip: !supportsStrictMode }, function (st) {
		st['throws'](function () { return codePointAt(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return codePointAt(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});
	
	t.test('cast this value', function (st) {
		st.equal(codePointAt(42, 0), 0x34);
		st.equal(codePointAt(42, 1), 0x32);
		st.equal(codePointAt({ 'toString': function() { return 'abc'; } }, 2), 0x63);

		var tmp = 0;
		st.equal(codePointAt({ 'toString': function() { ++tmp; return String(tmp); } }, 0), 0x31);
		st.equal(tmp, 1);

		st.end();
	});
};
