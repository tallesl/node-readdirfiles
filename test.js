'use strict'

/* global it */

const _ = require('lodash')
const assert = require('assert')
const readdirFiles = require('./')
const expected = [
  { path: 'numbers/1', content: 'one\n' },
  { path: 'numbers/2', content: 'two\n' },
  { path: 'numbers/3', content: 'three\n' }
]

it('non stream (utf8)', (done) => {
  readdirFiles('./numbers', 'utf8', (err, actual) => {
    assert.ifError(err)
    assert.deepEqual(actual, expected)
    done()
  })
})

it('non stream (bytes)', (done) => {
  const byteExpected = _.cloneDeep(expected)
    .map((file) => {
      file.content = new Buffer(file.content)
      return file
    })

  readdirFiles('./numbers', (err, actual) => {
    assert.ifError(err)
    assert.deepEqual(actual, byteExpected)
    done()
  })
})

it('stream', (done) => {
  const stream = new readdirFiles.Stream('./numbers', 'utf8')
  const actual = [ ]

  stream.on('readable', () => {
    const data = stream.read()
    if (data) actual.push(data)
  })

  stream.on('end', () => {
    assert.deepEqual(actual, expected)
    done()
  })
})
