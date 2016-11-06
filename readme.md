# hast-util-labelable [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

Check whether a [HAST node][hast] is [labelable][spec].

## Installation

[npm][]:

```bash
npm install hast-util-labelable
```

## Usage

```javascript
var labelable = require('hast-util-labelable');

labelable({type: 'element', tagName: 'div'}); //=> false

labelable({type: 'element', tagName: 'input'}); //=> true

labelable({
  type: 'element',
  tagName: 'input',
  properties: {type: 'hidden'}
}); //=> false
```

## API

### `labelable(node)`

###### Parameters

*   `node` ([`Node`][node], optional) — Node to check.

###### Returns

`boolean` — Whether `node` is a labelable element.
Labelable nodes have a `tagName` set to `button`, `keygen`,
`meter`, `output`, `progress`, `select`, `textarea`, and `input`
(excluding `[type=hidden]`.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/hast-util-labelable.svg

[build-page]: https://travis-ci.org/wooorm/hast-util-labelable

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/hast-util-labelable.svg

[coverage-page]: https://codecov.io/github/wooorm/hast-util-labelable?branch=master

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[hast]: https://github.com/wooorm/hast

[spec]: https://html.spec.whatwg.org/#category-label

[node]: https://github.com/wooorm/hast#node
