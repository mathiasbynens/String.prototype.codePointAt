var assert = require('assert');
var assertEquals = assert.equal;
var assertThrows = assert['throws'];

var codePointAt = require('../implementation');

assertEquals(codePointAt.length, 1);

// String that starts with a BMP symbol
assertEquals(codePointAt.call('abc\uD834\uDF06def', ''), 0x61);
assertEquals(codePointAt.call('abc\uD834\uDF06def', '_'), 0x61);
assertEquals(codePointAt.call('abc\uD834\uDF06def', ), 0x61);
assertEquals(codePointAt.call('abc\uD834\uDF06def', -Infinity), undefined);
assertEquals(codePointAt.call('abc\uD834\uDF06def', -1), undefined);
assertEquals(codePointAt.call('abc\uD834\uDF06def', -0), 0x61);
assertEquals(codePointAt.call('abc\uD834\uDF06def', 0), 0x61);
assertEquals(codePointAt.call('abc\uD834\uDF06def', 3), 0x1D306);
assertEquals(codePointAt.call('abc\uD834\uDF06def', 4), 0xDF06);
assertEquals(codePointAt.call('abc\uD834\uDF06def', 5), 0x64);
assertEquals(codePointAt.call('abc\uD834\uDF06def', 42), undefined);
assertEquals(codePointAt.call('abc\uD834\uDF06def', Infinity), undefined);
assertEquals(codePointAt.call('abc\uD834\uDF06def', Infinity), undefined);
assertEquals(codePointAt.call('abc\uD834\uDF06def', NaN), 0x61);
assertEquals(codePointAt.call('abc\uD834\uDF06def', false), 0x61);
assertEquals(codePointAt.call('abc\uD834\uDF06def', null), 0x61);
assertEquals(codePointAt.call('abc\uD834\uDF06def', undefined), 0x61);

// String that starts with an astral symbol
assertEquals(codePointAt.call('\uD834\uDF06def', ''), 0x1D306);
assertEquals(codePointAt.call('\uD834\uDF06def', '1'), 0xDF06);
assertEquals(codePointAt.call('\uD834\uDF06def', '_'), 0x1D306);
assertEquals(codePointAt.call('\uD834\uDF06def', ), 0x1D306);
assertEquals(codePointAt.call('\uD834\uDF06def', -1), undefined);
assertEquals(codePointAt.call('\uD834\uDF06def', -0), 0x1D306);
assertEquals(codePointAt.call('\uD834\uDF06def', 0), 0x1D306);
assertEquals(codePointAt.call('\uD834\uDF06def', 1), 0xDF06);
assertEquals(codePointAt.call('\uD834\uDF06def', 42), undefined);
assertEquals(codePointAt.call('\uD834\uDF06def', false), 0x1D306);
assertEquals(codePointAt.call('\uD834\uDF06def', null), 0x1D306);
assertEquals(codePointAt.call('\uD834\uDF06def', undefined), 0x1D306);

// Lone high surrogates
assertEquals(codePointAt.call('\uD834abc', ''), 0xD834);
assertEquals(codePointAt.call('\uD834abc', '_'), 0xD834);
assertEquals(codePointAt.call('\uD834abc', ), 0xD834);
assertEquals(codePointAt.call('\uD834abc', -1), undefined);
assertEquals(codePointAt.call('\uD834abc', -0), 0xD834);
assertEquals(codePointAt.call('\uD834abc', 0), 0xD834);
assertEquals(codePointAt.call('\uD834abc', false), 0xD834);
assertEquals(codePointAt.call('\uD834abc', NaN), 0xD834);
assertEquals(codePointAt.call('\uD834abc', null), 0xD834);
assertEquals(codePointAt.call('\uD834abc', undefined), 0xD834);

// Lone low surrogates
assertEquals(codePointAt.call('\uDF06abc', ''), 0xDF06);
assertEquals(codePointAt.call('\uDF06abc', '_'), 0xDF06);
assertEquals(codePointAt.call('\uDF06abc', ), 0xDF06);
assertEquals(codePointAt.call('\uDF06abc', -1), undefined);
assertEquals(codePointAt.call('\uDF06abc', -0), 0xDF06);
assertEquals(codePointAt.call('\uDF06abc', 0), 0xDF06);
assertEquals(codePointAt.call('\uDF06abc', false), 0xDF06);
assertEquals(codePointAt.call('\uDF06abc', NaN), 0xDF06);
assertEquals(codePointAt.call('\uDF06abc', null), 0xDF06);
assertEquals(codePointAt.call('\uDF06abc', undefined), 0xDF06);

assertThrows(function() { codePointAt.call(undefined); }, TypeError);
assertThrows(function() { codePointAt.call(undefined, 4); }, TypeError);
assertThrows(function() { codePointAt.call(null); }, TypeError);
assertThrows(function() { codePointAt.call(null, 4); }, TypeError);
assertEquals(codePointAt.call(42, 0), 0x34);
assertEquals(codePointAt.call(42, 1), 0x32);
assertEquals(codePointAt.call({ 'toString': function() { return 'abc'; } }, 2), 0x63);
var tmp = 0;
assertEquals(codePointAt.call({ 'toString': function() { ++tmp; return String(tmp); } }, 0), 0x31);
assertEquals(tmp, 1);

assertThrows(function() { codePointAt.apply(undefined); }, TypeError);
assertThrows(function() { codePointAt.apply(undefined, [4]); }, TypeError);
assertThrows(function() { codePointAt.apply(null); }, TypeError);
assertThrows(function() { codePointAt.apply(null, [4]); }, TypeError);
assertEquals(codePointAt.apply(42, [0]), 0x34);
assertEquals(codePointAt.apply(42, [1]), 0x32);
assertEquals(codePointAt.apply({ 'toString': function() { return 'abc'; } }, [2]), 0x63);
tmp = 0;
assertEquals(codePointAt.apply({ 'toString': function() { ++tmp; return String(tmp); } }, [0]), 0x31);
assertEquals(tmp, 1);

// NOTE: This test will test our code only in engines without native support
require('../auto');
assertEquals(String.prototype.propertyIsEnumerable('codePointAt'), false);
