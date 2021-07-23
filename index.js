/**
 * Check whether a `node` is labelable:
 * See: <https://html.spec.whatwg.org/#category-label>.
 *
 * @param {unknown} node
 * @returns {boolean}
 */
export function labelable(node) {
  /** @type {string} */
  const name =
    // @ts-ignore Looks like an object.
    node && typeof node === 'object' && node.type === 'element' && node.tagName

  return Boolean(
    name === 'button' ||
      name === 'keygen' ||
      name === 'meter' ||
      name === 'output' ||
      name === 'progress' ||
      name === 'select' ||
      name === 'textarea' ||
      (name === 'input' &&
        // @ts-ignore Looks like an object.
        (node.properties && node.properties.type) !== 'hidden')
  )
}
