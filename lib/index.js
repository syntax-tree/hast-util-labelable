/**
 * @typedef {import('hast').Nodes} Nodes
 */

/**
 * Check whether a `node` is labelable:
 * See: <https://html.spec.whatwg.org/multipage/forms.html#category-label>.
 *
 * @param {Nodes} node
 *   Node to check (typically `Element`).
 * @returns {boolean}
 *   Whether `node` is a labelable element.
 *
 *   Labelable elements are `button`, `keygen`, `meter`, `output`, `progress`,
 *   `select`, `textarea`, and `input` (excluding `[type=hidden]`).
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
