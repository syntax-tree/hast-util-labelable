# hast-util-labelable [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

Check whether a [HAST node][hast] is [labelable][spec].

## Installation

[npm][]:

```bash
npm install hast-util-labelable
```

**hast-util-labelable** is also available as an AMD, CommonJS, and globals
module, [uncompressed and compressed][releases].

## Usage

Dependencies:

```javascript
var labelable = require('hast-util-labelable');
var a = labelable({
    'type': 'element',
    'tagName': 'div'
});
var b = labelable({
    'type': 'element',
    'tagName': 'input'
});
var c = labelable({
    'type': 'element',
    'tagName': 'input',
    'properties': {
        'type': 'hidden'
    }
});
```

Yields:

```txt
a: false
b: true
c: false
```

## API

### `labelable(node)`

**Parameters**:

*   `node` ([`Node`][node], optional) — Node to check.

**Returns**:

`boolean` — Whether `node` is a labelable element.
Labelable nodes have a `tagName` set include `button`, `keygen`,
`meter`, `output`, `progress`, `select`, `textarea`, and `input`
(when not `[type=hidden]`.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/hast-util-labelable.svg

[build-page]: https://travis-ci.org/wooorm/hast-util-labelable

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/hast-util-labelable.svg

[coverage-page]: https://codecov.io/github/wooorm/hast-util-labelable?branch=master

[npm]: https://docs.npmjs.com/cli/install

[releases]: https://github.com/wooorm/hast-util-labelable/releases

[license]: LICENSE

[author]: http://wooorm.com

[hast]: https://github.com/wooorm/hast

[spec]: https://html.spec.whatwg.org/#category-label

[node]: https://github.com/wooorm/hast#node
