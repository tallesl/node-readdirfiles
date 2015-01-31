# readdirfiles

[![dependencies](https://david-dm.org/tallesl/readdirfiles.png)](https://david-dm.org/tallesl/readdirfiles)
[![devDependencies](https://david-dm.org/tallesl/readdirfiles/dev-status.png)](https://david-dm.org/tallesl/readdirfiles#info=devDependencies)
[![npm module](https://badge.fury.io/js/readdirfiles.png)](http://badge.fury.io/js/readdirfiles)

[![npm](https://nodei.co/npm/readdirfiles.png?mini=true)](https://nodei.co/npm/readdirfiles)

Node.js' [fs.readdir](http://nodejs.org/api/fs.html#fs_fs_readdir_path_callback) + [fs.readFile](http://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback).

## Usage

```
$ mkdir numbers
$ echo "one" > numbers/1
$ echo "two" > numbers/2
$ echo "three" > numbers/3
$ npm install readdirfiles
readdirfiles@1.1.0 node_modules/readdirfiles
$ node
> var readdirFiles = require('readdirfiles')
undefined
> readdirFiles('numbers', 'utf8', function (err, files) { console.dir(files) })
undefined
> [ { path: 'numbers/1', content: 'one\n' },
  { path: 'numbers/2', content: 'two\n' },
  { path: 'numbers/3', content: 'three\n' } ]
```

