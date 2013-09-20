# ES6 `String.prototype.codePointAt` polyfill [![Build status](https://travis-ci.org/mathiasbynens/String.prototype.codePointAt.png?branch=master)](https://travis-ci.org/mathiasbynens/String.prototype.codePointAt)

A robust & optimized ES3-compatible polyfill for [the `String.prototype.codePointAt` method in ECMAScript 6](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-21.1.3.3).

Other polyfills for `String.prototype.codePointAt` are available:

* <http://norbertlindenberg.com/2012/05/ecmascript-supplementary-characters/> by [Norbert Lindenberg](http://norbertlindenberg.com/) (fails 2 tests)
* <https://gist.github.com/slevithan/2290602> by [Steven Levithan](http://stevenlevithan.com/) (fails 6 tests)

## Installation

In a browser:

```html
<script src="codepointat.js"></script>
```

Via [npm](http://npmjs.org/):

```bash
npm install string.prototype.codepointat
```

Then, in [Node.js](http://nodejs.org/):

```js
require('String.prototype.codePointAt');
```

## Author

| [![twitter/mathias](http://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](http://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](http://mathiasbynens.be/) |

## License

This polyfill is available under the [MIT](http://mths.be/mit) license.
