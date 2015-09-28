var assert       = require('assert')
  , expected     = require('./expected')
  , readdirFiles = require('../')

it('non stream', function (done) {

  readdirFiles('./test/dir', 'utf8', function (err, files) {
    assert.ifError(err)
    assert.deepEqual(files, expected)
    done()
  })

})
