# hast-util-labelable

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**hast**][hast] utility to check if an [*element*][element] is
[*labelable*][spec].

## Install

[npm][]:

```sh
npm install hast-util-labelable
```

## Usage

```js
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

Check if the given value is a [*labelable*][spec] [*element*][element].

###### Parameters

*   `node` (`*`, optional) — Value to check, probably [`Node`][node]

###### Returns

`boolean` — Whether `node` is a labelable element.
Labelable nodes have a `tagName` set to `button`, `keygen`,
`meter`, `output`, `progress`, `select`, `textarea`, and `input`
(excluding `[type=hidden]`).

## Security

`hast-util-labelable` does not change the syntax tree so there are no openings
for [cross-site scripting (XSS)][xss] attacks.

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/syntax-tree/hast-util-labelable.svg

[build]: https://travis-ci.org/syntax-tree/hast-util-labelable

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-labelable.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-util-labelable

[downloads-badge]: https://img.shields.io/npm/dm/hast-util-labelable.svg

[downloads]: https://www.npmjs.com/package/hast-util-labelable

[size-badge]: https://img.shields.io/bundlephobia/minzip/hast-util-labelable.svg

[size]: https://bundlephobia.com/result?p=hast-util-labelable

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/master/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/master/support.md

[coc]: https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md

[spec]: https://html.spec.whatwg.org/#category-label

[hast]: https://github.com/syntax-tree/hast

[node]: https://github.com/syntax-tree/hast#nodes

[element]: https://github.com/syntax-tree/hast#element

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting
