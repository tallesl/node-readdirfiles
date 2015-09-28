var assert       = require('assert')
  , expected     = require('./expected')
  , readdirFiles = require('../')

it('stream', function (done) {

  var stream   = new readdirFiles.Stream('./test/dir', 'utf8')
    , gathered = [ ]

  stream.on('readable', function () {
    var data = stream.read()
    if (data) gathered.push(data)
  })

  stream.on('end', function () {
    assert.deepEqual(gathered, expected)
    done()
  })

})
