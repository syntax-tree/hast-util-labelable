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
 *   Labelable elements are `button`, `input` (excluding `[type=hidden]`),
 *   `keygen`, `meter`, `output`, `progress`, `select`, and `textarea`.
 */
export function labelable(node) {
  return Boolean(
    node.type === 'element' &&
      (node.tagName === 'button' ||
        (node.tagName === 'input' && node.properties.type !== 'hidden') ||
        node.tagName === 'keygen' ||
        node.tagName === 'meter' ||
        node.tagName === 'output' ||
        node.tagName === 'progress' ||
        node.tagName === 'select' ||
        node.tagName === 'textarea')
  )
}
