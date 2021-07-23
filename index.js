/**
 * @typedef {import('hast').Root} Root
 * @typedef {Root['children'][number]|Root} Node
 */

/**
 * Check whether a `node` is labelable:
 * See: <https://html.spec.whatwg.org/#category-label>.
 *
 * @param {Node} node
 * @returns {boolean}
 */
export function labelable(node) {
  return Boolean(
    node &&
      typeof node === 'object' &&
      node.type === 'element' &&
      (node.tagName === 'button' ||
        node.tagName === 'keygen' ||
        node.tagName === 'meter' ||
        node.tagName === 'output' ||
        node.tagName === 'progress' ||
        node.tagName === 'select' ||
        node.tagName === 'textarea' ||
        (node.tagName === 'input' &&
          (node.properties && node.properties.type) !== 'hidden'))
  )
}
