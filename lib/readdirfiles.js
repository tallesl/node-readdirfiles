var async = require('async')
  , fs    = require('fs')
  , path  = require('path')

module.exports = function (dirpath, options, callback) {

  if (isFunction(options) || !options) options = { encoding: null, flag: 'r' }
  else if (isString(options)) options = { encoding: options, flag: 'r' }
  else if (!isObject(options)) throw new TypeError('Bad arguments')

  fs.readdir(dirpath, function (err, filenames) {

    if (err) process.nextTick(function () { callback(err) })
    else {
      var filepaths = joinFilepaths(dirpath, filenames)
        , series    = [ ]

      var pushSerie = function (filepath) {
        series.push(function (callback) {
          isDirectory(filepath, function (err, isDirectory) {
            if (err) callback(err)
            else if (isDirectory) callback()
            else fs.readFile(filepath, options, function (err, data) {
              callback(err, { path: filepath, content: data })
            })
          })
        })
      }

      filepaths.forEach(pushSerie)
      async.series(series, callback)
    }

  })

}

function isFunction (arg) {
  return typeof arg === 'function'
}

function isString (arg) {
  return typeof arg === 'string'
}

function isObject (arg) {
  return typeof arg === 'object' && arg !== null
}

function joinFilepaths (dirpath, filenames) {
  return filenames.map(function (filename) {
    return path.join(dirpath, filename)
  })
}

function isDirectory (filepath, callback) {
  fs.stat(filepath, function (err, stat) {
    var isDirectory = false
    if (!err) isDirectory = stat.isDirectory()
    process.nextTick(function () { callback(err, isDirectory) })
  })
}

