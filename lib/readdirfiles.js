var async = require('async')
  , fs    = require('fs')
  , path  = require('path')

module.exports = function (dirpath, options, callback) {

       if (typeof options === 'string') options = { encoding: options, flag: 'r' }
  else if (typeof options === 'function') {
    callback = options
    options  = { encoding: null, flag: 'r' }
  }

  fs.readdir(dirpath, function (err, filenames) {

    if (err) return process.nextTick(function () { callback(err) })

    var toFullPath    = function (filename) { return path.join(dirpath, filename) }
      , isntDirectory = function (filepath) { return !fs.statSync(filepath).isDirectory() }
      , filepaths     = filenames.map(toFullPath).filter(isntDirectory)
      , readFile      = function (filepath, callback) {
                          fs.readFile(filepath , options, function (err, data) {
                            callback(null, err ? null : { path: filepath, content: data })
                          })
                        }

    async.map(filepaths, readFile, callback)

  })

}

