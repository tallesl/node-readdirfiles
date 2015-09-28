# readdirFiles

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][module-img]][module]

[![][npm-img]][npm]

Node.js' [fs.readdir] + [fs.readFile].

[build]:     https://travis-ci.org/tallesl/readdirfiles
[build-img]: https://travis-ci.org/tallesl/readdirfiles.png

[coverage]:     https://coveralls.io/r/tallesl/readdirfiles?branch=master
[coverage-img]: https://coveralls.io/repos/tallesl/readdirfiles/badge.png?branch=master

[dependencies]:     https://david-dm.org/tallesl/readdirfiles
[dependencies-img]: https://david-dm.org/tallesl/readdirfiles.png

[devdependencies]:     https://david-dm.org/tallesl/readdirfiles#info=devDependencies
[devdependencies-img]: https://david-dm.org/tallesl/readdirfiles/dev-status.png

[module]:     http://badge.fury.io/js/readdirfiles
[module-img]: https://badge.fury.io/js/readdirfiles.png

[npm]:     https://nodei.co/npm/readdirfiles
[npm-img]: https://nodei.co/npm/readdirfiles.png?mini=true

[fs.readdir]:  http://nodejs.org/api/fs.html#fs_fs_readdir_path_callback
[fs.readFile]: http://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback

## Usage

```
$ mkdir numbers
$ echo "one" > numbers/1
$ echo "two" > numbers/2
$ echo "three" > numbers/3
$ npm install readdirfiles
readdirfiles@1.2.0 node_modules/readdirfiles
$ node
> var readdirFiles = require('readdirfiles')
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
