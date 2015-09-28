var async         = require('async')
  , fs            = require('fs')
  , fullFilepaths = require('./full-filepaths')
  , path          = require('path')

module.exports = function (dirpath, options, callback) {

       if (typeof options === 'string') options = { encoding: options, flag: 'r' }
  else if (typeof options === 'function') {
    callback = options
    options  = { encoding: null, flag: 'r' }
  }

  async.map(
      fullFilepaths(dirpath)
    , function (filepath, callback) {
        fs.readFile(filepath , options, function (err, data) {
          callback(err, err ? null : { path: filepath, content: data })
        })
      }
    , callback
  )

}
