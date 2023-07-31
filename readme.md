# hast-util-labelable

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[hast][] utility to check if a node is a [*labelable element*][spec].

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`labelable(node)`](#labelablenode)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a small utility that checks if a node is a labelable element
according to HTML.

## When should I use this?

This utility is super niche, if you’re here you probably know what you’re
looking for!

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install hast-util-labelable
```

In Deno with [`esm.sh`][esmsh]:

```js
import {labelable} from 'https://esm.sh/hast-util-labelable@3'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {labelable} from 'https://esm.sh/hast-util-labelable@3?bundle'
</script>
```

## Use

```js
import {labelable} from 'hast-util-labelable'

labelable({type: 'element', tagName: 'div', properties: {}, children: []}) // => false

labelable({type: 'element', tagName: 'input', properties: {}, children: []}) // => true

labelable({
  type: 'element',
  tagName: 'input',
  properties: {type: 'hidden'},
  children: []
}) // => false
```

## API

This package exports the identifier [`labelable`][api-labelable].
There is no default export.

### `labelable(node)`

Check if the given value is a [*labelable element*][spec].

###### Parameters

*   `node` ([`Node`][node])
    — node to check (typically [`Element`][element])

###### Returns

Whether `node` is a labelable element (`boolean`).

Labelable elements are `button`, `input` (excluding `[type=hidden]`), `keygen`,
`meter`, `output`, `progress`, `select`, and `textarea`.

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line, `hast-util-labelable@^3`,
compatible with Node.js 16.

## Security

`hast-util-labelable` does not change the syntax tree so there are no openings
for [cross-site scripting (XSS)][xss] attacks.

## Related

*   [`hast-util-is-element`](https://github.com/syntax-tree/hast-util-is-element)
    — check if a node is a (certain) element
*   [`hast-util-has-property`](https://github.com/syntax-tree/hast-util-has-property)
    — check if a node has a property
*   [`hast-util-is-body-ok-link`](https://github.com/rehypejs/rehype-minify/tree/main/packages/hast-util-is-body-ok-link)
    — check if a node is “Body OK” link element
*   [`hast-util-is-conditional-comment`](https://github.com/rehypejs/rehype-minify/tree/main/packages/hast-util-is-conditional-comment)
    — check if a node is a conditional comment
*   [`hast-util-is-css-link`](https://github.com/rehypejs/rehype-minify/tree/main/packages/hast-util-is-css-link)
    — check if a node is a CSS link element
*   [`hast-util-is-css-style`](https://github.com/rehypejs/rehype-minify/tree/main/packages/hast-util-is-css-style)
    — check if a node is a CSS style element
*   [`hast-util-embedded`](https://github.com/syntax-tree/hast-util-embedded)
    — check if a node is an embedded element
*   [`hast-util-heading`](https://github.com/syntax-tree/hast-util-heading)
    — check if a node is a heading element
*   [`hast-util-interactive`](https://github.com/syntax-tree/hast-util-interactive)
    — check if a node is interactive
*   [`hast-util-is-javascript`](https://github.com/rehypejs/rehype-minify/tree/main/packages/hast-util-is-javascript)
    — check if a node is a JavaScript script element
*   [`hast-util-phrasing`](https://github.com/syntax-tree/hast-util-phrasing)
    — check if a node is phrasing content
*   [`hast-util-script-supporting`](https://github.com/syntax-tree/hast-util-script-supporting)
    — check if a node is a script-supporting element
*   [`hast-util-sectioning`](https://github.com/syntax-tree/hast-util-sectioning)
    — check if a node is a sectioning element
*   [`hast-util-transparent`](https://github.com/syntax-tree/hast-util-transparent)
    — check if a node is a transparent element
*   [`hast-util-whitespace`](https://github.com/syntax-tree/hast-util-whitespace)
    — check if a node is inter-element whitespace

## Contribute

See [`contributing.md`][contributing] in [`syntax-tree/.github`][health] for
ways to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://github.com/syntax-tree/hast-util-labelable/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/hast-util-labelable/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-labelable.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-util-labelable

[downloads-badge]: https://img.shields.io/npm/dm/hast-util-labelable.svg

[downloads]: https://www.npmjs.com/package/hast-util-labelable

[size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=hast-util-labelable

[size]: https://bundlejs.com/?q=hast-util-labelable

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[license]: license

[author]: https://wooorm.com

[health]: https://github.com/syntax-tree/.github

[contributing]: https://github.com/syntax-tree/.github/blob/main/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/main/support.md

[coc]: https://github.com/syntax-tree/.github/blob/main/code-of-conduct.md

[spec]: https://html.spec.whatwg.org/multipage/forms.html#category-label

[hast]: https://github.com/syntax-tree/hast

[node]: https://github.com/syntax-tree/hast#nodes

[element]: https://github.com/syntax-tree/hast#element

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[api-labelable]: #labelablenode
