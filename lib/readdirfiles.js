var async = require('async')
  , fs    = require('fs')
  , path  = require('path')

module.exports = function (dirpath, callback) {
  fs.readdir(dirpath, function (err, filenames) {
    if (err) process.nextTick(function () { callback(err) })
    else readFiles(joinFilepaths(dirpath, filenames), callback)
  })
}

function joinFilepaths (dirpath, filenames) {
  return filenames.map(function (filename) {
    return path.join(dirpath, filename)
  })
}

function readFiles (filepaths, callback) {
  async.each(filepaths, function (filepath) {
    filterDirectory(filepath, function (err, filepath) {
      readFile(filepath, callback)
    })
  })
}

function filterDirectory (filepath, callback) {
  fs.stat(filepath, function (err, stat) {
    if (err) process.nextTick(function () { callback(err) })
    else if (!stat.isDirectory()) process.nextTick(function () { callback(null, filepath) })
  })
}

function readFile (filepath, callback) {
  fs.readFile(filepath, 'utf8', function (err, data) {
    var file = { path: filepath, content: data }
    process.nextTick(function () { callback(err, file) })
  })
}

