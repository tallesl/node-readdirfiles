var assert       = require('assert')
  , expected     = require('./expected')
  , readdirFiles = require('../')

it('stream', function (done) {

  var stream   = new readdirFiles.Stream('./test/dir', 'utf8')
    , actual = [ ]

  stream.on('readable', function () {
    var data = stream.read()
    if (data) actual.push(data)
  })

  stream.on('end', function () {
    assert.deepEqual(actual, expected)
    done()
  })

})
