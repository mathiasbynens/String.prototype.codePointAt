var assert = require('assert');

require('../codepointat.js');

var tests = [
	// String that starts with a BMP symbol
	{
		'string': 'abc\uD834\uDF06def',
		'position': -1,
		'result': undefined
	},
	{
		'string': 'abc\uD834\uDF06def',
		'position': 0,
		'result': 0x61
	},
	{
		'string': 'abc\uD834\uDF06def',
		'position': null,
		'result': 0x61
	},
	{
		'string': 'abc\uD834\uDF06def',
		'position': undefined,
		'result': 0x61
	},
	{
		'string': 'abc\uD834\uDF06def',
		'position': false,
		'result': 0x61
	},
	{
		'string': 'abc\uD834\uDF06def',
		'position': NaN,
		'result': 0x61
	},
	{
		'string': 'abc\uD834\uDF06def',
		'position': '',
		'result': 0x61
	},
	{
		'string': 'abc\uD834\uDF06def',
		'position': '_',
		'result': 0x61
	},
	{
		'string': 'abc\uD834\uDF06def',
		'position': 3,
		'result': 0x1D306
	},
	{
		'string': 'abc\uD834\uDF06def',
		'position': 4,
		'result': 0xDF06
	},
	{
		'string': 'abc\uD834\uDF06def',
		'position': 5,
		'result': 0x64
	},
	{
		'string': 'abc\uD834\uDF06def',
		'position': 42,
		'result': undefined
	},
	{
		'string': 'abc\uD834\uDF06def',
		'position': Infinity,
		'result': undefined
	},
	{
		'string': 'abc\uD834\uDF06def',
		'position': -Infinity,
		'result': undefined
	},
	// String that starts with an astral symbol
	{
		'string': '\uD834\uDF06def',
		'position': -1,
		'result': undefined
	},
	{
		'string': '\uD834\uDF06def',
		'position': 0,
		'result': 0x1D306
	},
	{
		'string': '\uD834\uDF06def',
		'position': null,
		'result': 0x1D306
	},
	{
		'string': '\uD834\uDF06def',
		'position': undefined,
		'result': 0x1D306
	},
	{
		'string': '\uD834\uDF06def',
		'position': false,
		'result': 0x1D306
	},
	{
		'string': '\uD834\uDF06def',
		'position': '',
		'result': 0x1D306
	},
	{
		'string': '\uD834\uDF06def',
		'position': '_',
		'result': 0x1D306
	},
	{
		'string': '\uD834\uDF06def',
		'position': 42,
		'result': undefined
	},
	{
		'string': '\uD834\uDF06def',
		'position': 1,
		'result': 0xDF06
	},
	{
		'string': '\uD834\uDF06def',
		'position': '1',
		'result': 0xDF06
	},
	// Lone high surrogates
	{
		'string': '\uD834abc',
		'position': -1,
		'result': undefined
	},
	{
		'string': '\uD834abc',
		'position': 0,
		'result': 0xD834
	},
	{
		'string': '\uD834abc',
		'position': null,
		'result': 0xD834
	},
	{
		'string': '\uD834abc',
		'position': undefined,
		'result': 0xD834
	},
	{
		'string': '\uD834abc',
		'position': false,
		'result': 0xD834
	},
	{
		'string': '\uD834abc',
		'position': NaN,
		'result': 0xD834
	},
	{
		'string': '\uD834abc',
		'position': '',
		'result': 0xD834
	},
	{
		'string': '\uD834abc',
		'position': '_',
		'result': 0xD834
	},
	// Lone low surrogates
	{
		'string': '\uDF06abc',
		'position': -1,
		'result': undefined
	},
	{
		'string': '\uDF06abc',
		'position': 0,
		'result': 0xDF06
	},
	{
		'string': '\uDF06abc',
		'position': null,
		'result': 0xDF06
	},
	{
		'string': '\uDF06abc',
		'position': undefined,
		'result': 0xDF06
	},
	{
		'string': '\uDF06abc',
		'position': false,
		'result': 0xDF06
	},
	{
		'string': '\uDF06abc',
		'position': NaN,
		'result': 0xDF06
	},
	{
		'string': '\uDF06abc',
		'position': '',
		'result': 0xDF06
	},
	{
		'string': '\uDF06abc',
		'position': '_',
		'result': 0xDF06
	}
];

assert.equal(String.prototype.codePointAt.length, 1);

var errors = 0;
tests.forEach(function(test, index) {
	try {
		assert.equal(
			test.string.codePointAt(test.position),
			test.result,
			index
		);
	} catch(error) {
		errors++;
		console.log(error.stack);
	}
});

console.log(
	'Ran %d tests.\n%d assertions failed.\n%d assertions passed.',
	tests.length, errors, tests.length - errors
);
if (errors) {
	process.exit(1);
}
