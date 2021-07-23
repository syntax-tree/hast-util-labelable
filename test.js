import test from 'tape'
import {labelable} from './index.js'

test('labelable', (t) => {
  // @ts-expect-error: runtime.
  t.equal(labelable(), false, 'should return `false` without node')

  t.equal(
    labelable({type: 'text', value: 'Alpha'}),
    false,
    'should return `false` without element'
  )

  t.equal(
    labelable({type: 'element', tagName: 'div', children: []}),
    false,
    'should return `false` for non-labelable elements'
  )

  t.equal(
    labelable({type: 'element', tagName: 'input', children: []}),
    true,
    'should return `true` for `input` elements'
  )

  t.equal(
    labelable({
      type: 'element',
      tagName: 'input',
      properties: {type: 'hidden'},
      children: []
    }),
    false,
    'should return `false` for `input[type=hidden]` elements'
  )

  t.equal(
    labelable({type: 'element', tagName: 'button', children: []}),
    true,
    'should return `true` for `button` elements'
  )

  t.equal(
    labelable({type: 'element', tagName: 'keygen', children: []}),
    true,
    'should return `true` for `keygen` elements'
  )

  t.equal(
    labelable({type: 'element', tagName: 'meter', children: []}),
    true,
    'should return `true` for `meter` elements'
  )

  t.equal(
    labelable({type: 'element', tagName: 'output', children: []}),
    true,
    'should return `true` for `output` elements'
  )

  t.equal(
    labelable({type: 'element', tagName: 'progress', children: []}),
    true,
    'should return `true` for `progress` elements'
  )

  t.equal(
    labelable({type: 'element', tagName: 'select', children: []}),
    true,
    'should return `true` for `select` elements'
  )

  t.equal(
    labelable({type: 'element', tagName: 'textarea', children: []}),
    true,
    'should return `true` for `textarea` elements'
  )

  t.end()
})
