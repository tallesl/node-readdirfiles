var fs            = require('fs')
  , fullFilepaths = require('./full-filepaths')
  , path          = require('path')
  , stream        = require('stream')
  , util          = require('util')

module.exports = function (dirpath, options) {

  stream.Readable.call(this, { objectMode: true })

  var toRead = fullFilepaths(dirpath)

  this._read = function () {

    var that     = this
      , filepath = toRead.shift()

    if (!filepath) return this.push(null)

    fs.readFile(filepath, options, function (err, data) {

      if (err) return that.emit('error', err)
      else that.push({
          path:    filepath
        , content: data
      })

    })

  }

}

util.inherits(module.exports, stream.Readable)
