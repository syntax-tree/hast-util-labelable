import assert from 'node:assert/strict'
import test from 'node:test'
import {labelable} from './index.js'

test('labelable', () => {
  // @ts-expect-error: runtime.
  assert.equal(labelable(), false, 'should return `false` without node')

  assert.equal(
    labelable({type: 'text', value: 'Alpha'}),
    false,
    'should return `false` without element'
  )

  assert.equal(
    labelable({type: 'element', tagName: 'div', children: []}),
    false,
    'should return `false` for non-labelable elements'
  )

  assert.equal(
    labelable({type: 'element', tagName: 'input', children: []}),
    true,
    'should return `true` for `input` elements'
  )

  assert.equal(
    labelable({
      type: 'element',
      tagName: 'input',
      properties: {type: 'hidden'},
      children: []
    }),
    false,
    'should return `false` for `input[type=hidden]` elements'
  )

  assert.equal(
    labelable({type: 'element', tagName: 'button', children: []}),
    true,
    'should return `true` for `button` elements'
  )

  assert.equal(
    labelable({type: 'element', tagName: 'keygen', children: []}),
    true,
    'should return `true` for `keygen` elements'
  )

  assert.equal(
    labelable({type: 'element', tagName: 'meter', children: []}),
    true,
    'should return `true` for `meter` elements'
  )

  assert.equal(
    labelable({type: 'element', tagName: 'output', children: []}),
    true,
    'should return `true` for `output` elements'
  )

  assert.equal(
    labelable({type: 'element', tagName: 'progress', children: []}),
    true,
    'should return `true` for `progress` elements'
  )

  assert.equal(
    labelable({type: 'element', tagName: 'select', children: []}),
    true,
    'should return `true` for `select` elements'
  )

  assert.equal(
    labelable({type: 'element', tagName: 'textarea', children: []}),
    true,
    'should return `true` for `textarea` elements'
  )
})
