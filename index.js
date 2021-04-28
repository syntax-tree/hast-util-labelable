// Check whether a `node` is labelable:
// See: <https://html.spec.whatwg.org/#category-label>.
export function labelable(node) {
  var name = node && node.type === 'element' && node.tagName

  return Boolean(
    name === 'button' ||
      name === 'keygen' ||
      name === 'meter' ||
      name === 'output' ||
      name === 'progress' ||
      name === 'select' ||
      name === 'textarea' ||
      (name === 'input' &&
        (node.properties && node.properties.type) !== 'hidden')
  )
}
