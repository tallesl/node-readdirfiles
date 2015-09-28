var _            = require('lodash')
  , assert       = require('assert')
  , expected     = require('./expected')
  , readdirFiles = require('../')

it('non stream (utf8)', function (done) {

  readdirFiles('./test/dir', 'utf8', function (err, actual) {
    assert.ifError(err)
    assert.deepEqual(actual, expected)
    done()
  })

})

it('non stream (bytes)', function (done) {

  var byteExpected = _.clone(expected, true).map(function (file) { file.content = new Buffer(file.content) ; return file })

  readdirFiles('./test/dir', function (err, actual) {
    assert.ifError(err)
    assert.deepEqual(actual, byteExpected)
    done()
  })

})
