import assert from 'node:assert/strict'
import test from 'node:test'
import {labelable} from './index.js'

test('labelable', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('./index.js')).sort(), [
      'labelable'
    ])
  })

  await t.test('should return `false` without node', async function () {
    // @ts-expect-error: check that the runtime supports a missing node.
    assert.equal(labelable(), false)
  })

  await t.test('should return `false` without element', async function () {
    assert.equal(labelable({type: 'text', value: 'Alpha'}), false)
  })

  await t.test(
    'should return `false` for non-labelable elements',
    async function () {
      assert.equal(
        labelable({
          type: 'element',
          tagName: 'div',
          properties: {},
          children: []
        }),
        false
      )
    }
  )

  await t.test('should return `true` for `input` elements', async function () {
    assert.equal(
      labelable({
        type: 'element',
        tagName: 'input',
        properties: {},
        children: []
      }),
      true
    )
  })

  await t.test(
    'should return `false` for `input[type=hidden]` elements',
    async function () {
      assert.equal(
        labelable({
          type: 'element',
          tagName: 'input',
          properties: {type: 'hidden'},
          children: []
        }),
        false
      )
    }
  )

  await t.test('should return `true` for `button` elements', async function () {
    assert.equal(
      labelable({
        type: 'element',
        tagName: 'button',
        properties: {},
        children: []
      }),
      true
    )
  })

  await t.test('should return `true` for `keygen` elements', async function () {
    assert.equal(
      labelable({
        type: 'element',
        tagName: 'keygen',
        properties: {},
        children: []
      }),
      true
    )
  })

  await t.test('should return `true` for `meter` elements', async function () {
    assert.equal(
      labelable({
        type: 'element',
        tagName: 'meter',
        properties: {},
        children: []
      }),
      true
    )
  })

  await t.test('should return `true` for `output` elements', async function () {
    assert.equal(
      labelable({
        type: 'element',
        tagName: 'output',
        properties: {},
        children: []
      }),
      true
    )
  })

  await t.test(
    'should return `true` for `progress` elements',
    async function () {
      assert.equal(
        labelable({
          type: 'element',
          tagName: 'progress',
          properties: {},
          children: []
        }),
        true
      )
    }
  )

  await t.test('should return `true` for `select` elements', async function () {
    assert.equal(
      labelable({
        type: 'element',
        tagName: 'select',
        properties: {},
        children: []
      }),
      true
    )
  })

  await t.test(
    'should return `true` for `textarea` elements',
    async function () {
      assert.equal(
        labelable({
          type: 'element',
          tagName: 'textarea',
          properties: {},
          children: []
        }),
        true
      )
    }
  )
})
