/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module hast:util:labelable
 * @fileoverview Check whether a node is labelable.
 */

'use strict';

/* eslint-env commonjs */

/**
 * Check whether a `node` is labelable.
 *
 * @see https://html.spec.whatwg.org/#category-label
 *
 * @param {Node?} [node] - HAST node to check.
 * @return {boolean} - whether `node` is labelable.
 */
function labelable(node) {
    var name = node && node.type === 'element' && node.tagName;
    var type = name && node.properties && node.properties.type;

    return Boolean(
        name &&
        (
            name === 'button' ||
            name === 'keygen' ||
            name === 'meter' ||
            name === 'output' ||
            name === 'progress' ||
            name === 'select' ||
            name === 'textarea' ||
            (name === 'input' && type !== 'hidden')
        )
    );
}

/*
 * Expose.
 */

module.exports = labelable;
