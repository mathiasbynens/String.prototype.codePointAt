# ES6 `String.prototype.codePointAt` polyfill  [![string.prototype.codepointat on npm](https://img.shields.io/npm/v/string.prototype.codepointat)](https://www.npmjs.com/package/string.prototype.codepointat)

A robust & optimized polyfill for [the `String.prototype.codePointAt` method in ECMAScript 6](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.codepointat).

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-string.prototype.codepointat).

Other polyfills for `String.prototype.codePointAt` are available:

* <http://norbertlindenberg.com/2012/05/ecmascript-supplementary-characters/#String> by [Norbert Lindenberg](http://norbertlindenberg.com/) (fails some tests)
* <https://gist.github.com/slevithan/2290602> by [Steven Levithan](http://stevenlevithan.com/) (fails some tests)
* <https://github.com/paulmillr/es6-shim/blob/8e570a4b425a80f9b13ff027dbd28d65f201a319/es6-shim.js#L171-L183> by [Paul Miller](http://paulmillr.com/) (~~[fails some tests](https://github.com/paulmillr/es6-shim/issues/166)~~ passes all tests)

## Installation

Via [npm](http://npmjs.org/):

```bash
npm install string.prototype.codepointat
```

Then, in [Node.js](http://nodejs.org/):

```js
require('string.prototype.codepointat');

// On Windows and on Mac systems with default settings, case doesn’t matter,
// which allows you to do this instead:
require('String.prototype.codePointAt');
```

In a browser:

```html
<script src="https://bundle.run/string.prototype.codepointat"></script>
```

> **NOTE**: It's recommended that you install this module using a package manager
> such as `npm`, because loading multiple polyfills from a CDN (such as `bundle.run`)
> will lead to duplicated code.

## Notes

[A polyfill + test suite for `String.fromCodePoint`](https://mths.be/fromcodepoint) is available, too.

## For maintainers

### How to publish a new release

1. On the `main` branch, bump the version number in `package.json`:

    ```sh
    npm version patch -m 'Release v%s'
    ```

    Instead of `patch`, use `minor` or `major` [as needed](https://semver.org/).

    Note that this produces a Git commit + tag.

1. Push the release commit and tag:

    ```sh
    git push && git push --tags
    ```

    Our CI then automatically publishes the new release to npm.

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This polyfill is available under the [MIT](https://mths.be/mit) license.
