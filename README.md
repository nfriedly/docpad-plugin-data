docpad-plugin-datafiles
=======================

[![Build Status](https://travis-ci.org/nfriedly/docpad-plugin-datafiles.svg?branch=master)](https://travis-ci.org/nfriedly/docpad-plugin-datafiles)
[![npm-version](https://img.shields.io/npm/v/docpad-plugin-datafiles.svg)](https://www.npmjs.com/package/docpad-plugin-datafiles)

[DocPad](http://docpad.org/) plugin for simple data files. 
Loads and parses JSON, YAML, JavaScript, and CoffeeScript files from `src/data/` and stores the contents on 
`config.templateData`, which makes the data available as `@filename` (or `{{filename}}` or whatever) when rendering 
documents and layouts.

Notable features:

* Data is cached and only updated when the source file changes
* Intelligent support for files with spaces, hyphens, etc. in the name (e.g. `file-name.json` becomes `@fileName`.)
* Support for absolute folder paths


## Installation

```sh
docpad install datafiles
```

## Configuration

**dataPaths**: An array of folders to search for data files in. 
Relative `dataPaths` are resolved from `docpadConfig.srcPath`, which defaults to `./src/`.
Note that DocPad only watches for changes in folders under `docpadConfig.srcPath`.

**camelCase**: converts file names with spaces, hyphens, etc. to camelCase to enable easier usage in templates.
For example `foo-bar.json` becomes `@fooBar` when `true` vs `@['foo-bar']` when false.

**alwaysReload**: Default behavior is to check the `mtime` and only reload modified files during regeneration. 
When true, this check will be skipped and all files will be reloaded at each regeneration.

Config with default options in CoffeeScript:

```cs
docpadConfig = {
  plugins:
    datafiles: 
      dataPaths: [ 'data' ],
      camelCase: true,
      alwaysReload: false 
  # ...
}
module.exports = docpadConfig
```

...and in JavaScript:
```js
const docpadConfig = {
  plugins: {
    datafiles: {
      dataPaths: ['data'],
      camelCase: true
      alwaysReload: false
    }
  }
  // ...
};

module.exports = docpadConfig;
```

### Credits

Original code was forked from [docpad-plugin-data](https://github.com/SE7ENSKY/docpad-plugin-data). 
Tests, documentation, various features, and other improvements by [Nathan Friedly](http://nfriedly.com/).
