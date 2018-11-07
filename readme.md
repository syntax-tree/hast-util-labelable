# hast-util-labelable [![Build][build-badge]][build] [![Coverage][coverage-badge]][coverage] [![Downloads][downloads-badge]][downloads] [![Chat][chat-badge]][chat]

Check whether a [HAST node][hast] is [labelable][spec].

## Installation

[npm][]:

```bash
npm install hast-util-labelable
```

## Usage

```javascript
var labelable = require('hast-util-labelable')

labelable({type: 'element', tagName: 'div'}) // => false

labelable({type: 'element', tagName: 'input'}) // => true

labelable({
  type: 'element',
  tagName: 'input',
  properties: {type: 'hidden'}
}) // => false
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

## Contribute

See [`contributing.md` in `syntax-tree/hast`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/syntax-tree/hast-util-labelable.svg

[build]: https://travis-ci.org/syntax-tree/hast-util-labelable

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-labelable.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-util-labelable

[downloads-badge]: https://img.shields.io/npm/dm/hast-util-labelable.svg

[downloads]: https://www.npmjs.com/package/hast-util-labelable

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/rehype

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[hast]: https://github.com/syntax-tree/hast

[spec]: https://html.spec.whatwg.org/#category-label

[node]: https://github.com/syntax-tree/unist#node

[contributing]: https://github.com/syntax-tree/hast/blob/master/contributing.md

[coc]: https://github.com/syntax-tree/hast/blob/master/code-of-conduct.md
