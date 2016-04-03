'use strict'

const async = require('async')
const fs = require('fs')
const path = require('path')
const stream = require('stream')
const util = require('util')

module.exports = function (dirpath, options, callback) {
  if (typeof options === 'string') options = { encoding: options, flag: 'r' }
  else if (typeof options === 'function') {
    callback = options
    options = { encoding: null, flag: 'r' }
  }

  async.map(
    fullFilepaths(dirpath),
    (filepath, callback) =>
      fs.readFile(filepath, options, (err, data) => callback(err, err ? null : { path: filepath, content: data })),
    callback
  )
}

module.exports.Stream = function (dirpath, options) {
  stream.Readable.call(this, { objectMode: true })

  const toRead = fullFilepaths(dirpath)

  this._read = () => {
    const that = this
    const filepath = toRead.shift()

    if (!filepath) return this.push(null)

    fs.readFile(filepath, options, (err, data) => {
      if (err) return that.emit('error', err)
      else that.push({ path: filepath, content: data })
    })
  }
}

util.inherits(module.exports.Stream, stream.Readable)

function fullFilepaths (dirpath) {
  return fs.readdirSync(dirpath)
    .map((filename) => path.join(dirpath, filename))
    .filter((filepath) => !fs.statSync(filepath).isDirectory())
}
