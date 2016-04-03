# readdirfiles

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][npm-img]][npm]

Node.js' [fs.readdir] + [fs.readFile].

[build]:               https://travis-ci.org/tallesl/node-readdirfiles
[build-img]:           https://travis-ci.org/tallesl/node-readdirfiles.svg
[coverage]:            https://coveralls.io/r/tallesl/node-readdirfiles?branch=master
[coverage-img]:        https://coveralls.io/repos/tallesl/node-readdirfiles/badge.svg?branch=master
[dependencies]:        https://david-dm.org/tallesl/node-readdirfiles
[dependencies-img]:    https://david-dm.org/tallesl/node-readdirfiles.svg
[devdependencies]:     https://david-dm.org/tallesl/node-readdirfiles#info=devDependencies
[devDependencies-img]: https://david-dm.org/tallesl/node-readdirfiles/dev-status.svg
[npm]:                 https://npmjs.com/package/readdirfiles
[npm-img]:             https://badge.fury.io/js/readdirfiles.svg

[fs.readdir]:          http://nodejs.org/api/fs.html#fs_fs_readdir_path_callback
[fs.readFile]:         http://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback

## Usage

```
$ mkdir numbers
$ echo "one" > numbers/1
$ echo "two" > numbers/2
$ echo "three" > numbers/3
$ npm install readdirfiles
(...)
$ node
> let readdirFiles = require('readdirfiles')
undefined
> readdirFiles('numbers', 'utf8', function (err, files) { console.dir(files) })
undefined
> [ { path: 'numbers/1', content: 'one\n' },
  { path: 'numbers/2', content: 'two\n' },
  { path: 'numbers/3', content: 'three\n' } ]
> /*
... There's a ReadableStream too if you want:
... var rs = new readdirFiles.Stream('numbers', 'utf8')
... */
undefined
```
