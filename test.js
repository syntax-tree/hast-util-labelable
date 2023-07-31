import assert from 'node:assert/strict'
import test from 'node:test'
import {labelable} from './index.js'
import * as mod from './index.js'

test('labelable', () => {
  assert.deepEqual(
    Object.keys(mod).sort(),
    ['labelable'],
    'should expose the public api'
  )

  // @ts-expect-error: runtime.
  assert.equal(labelable(), false, 'should return `false` without node')

  assert.equal(
    labelable({type: 'text', value: 'Alpha'}),
    false,
    'should return `false` without element'
  )

  assert.equal(
    labelable({type: 'element', tagName: 'div', properties: {}, children: []}),
    false,
    'should return `false` for non-labelable elements'
  )

  assert.equal(
    labelable({
      type: 'element',
      tagName: 'input',
      properties: {},
      children: []
    }),
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
    labelable({
      type: 'element',
      tagName: 'button',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `button` elements'
  )

  assert.equal(
    labelable({
      type: 'element',
      tagName: 'keygen',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `keygen` elements'
  )

  assert.equal(
    labelable({
      type: 'element',
      tagName: 'meter',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `meter` elements'
  )

  assert.equal(
    labelable({
      type: 'element',
      tagName: 'output',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `output` elements'
  )

  assert.equal(
    labelable({
      type: 'element',
      tagName: 'progress',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `progress` elements'
  )

  assert.equal(
    labelable({
      type: 'element',
      tagName: 'select',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `select` elements'
  )

  assert.equal(
    labelable({
      type: 'element',
      tagName: 'textarea',
      properties: {},
      children: []
    }),
    true,
    'should return `true` for `textarea` elements'
  )
})
