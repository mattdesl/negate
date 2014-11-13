# negate

[![frozen](http://badges.github.io/stability-badges/dist/frozen.svg)](http://github.com/badges/stability-badges)

Returns a negated version of the given function.

```js
var negate = require('negate')

function positive(n) {
    return n > 0
}

var negative = negate(positive)

negative(-50) === true
```

## Usage

[![NPM](https://nodei.co/npm/negate.png)](https://nodei.co/npm/negate/)

#### `negate(fn)`

Returns the negated version of `fn`.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/negate/blob/master/LICENSE.md) for details.
