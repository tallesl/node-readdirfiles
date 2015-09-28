var fs   = require('fs')
  , path = require('path')

module.exports = function (dirpath) {
  return fs.readdirSync(dirpath)
    .map(function (filename) {
      return path.join(dirpath, filename)
    })
    .filter(function (filepath) {
      return !fs.statSync(filepath).isDirectory()
    })
}
