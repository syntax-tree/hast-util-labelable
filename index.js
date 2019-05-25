'use strict'

module.exports = labelable

// Check whether a `node` is labelable:
// See: <https://html.spec.whatwg.org/#category-label>.
function labelable(node) {
  var name = node && node.type === 'element' && node.tagName
  var type = name && node.properties && node.properties.type

  return Boolean(
    name &&
      (name === 'button' ||
        name === 'keygen' ||
        name === 'meter' ||
        name === 'output' ||
        name === 'progress' ||
        name === 'select' ||
        name === 'textarea' ||
        (name === 'input' && type !== 'hidden'))
  )
}
