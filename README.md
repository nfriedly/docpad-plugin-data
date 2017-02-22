docpad-plugin-datafiles
=======================

[![Build Status](https://travis-ci.org/nfriedly/docpad-plugin-datafiles.svg?branch=master)](https://travis-ci.org/nfriedly/docpad-plugin-datafiles)
[![npm-version](https://img.shields.io/npm/v/docpad-plugin-datafiles.svg)](https://www.npmjs.com/package/docpad-plugin-datafiles)

DocPad plugin for simple data files. Loads and parses JSON, YAML, JavaScript, and CoffeeScript files from `src/data/` and 
stores the contents on `config.templateData`, which makes the data available at `@filename` when rendering documents.

Forked from [docpad-plugin-data](https://github.com/SE7ENSKY/docpad-plugin-data) with several improvements:
* Support for files with spaces, hyphens, etc. in the name (e.g. `file-name.json becomes `@fileName`.)
* Support for absolute folder paths
* Data is cached and only updated when the source file changes
* No annoying error about uncompiled CoffeeScript
* Documentation
* Tests

## Installation

```sh
docpad install datafiles
```

## Configuration

**dataPaths**: An array of folders to search for data files in. 
Relative `dataPaths` are resolved from `docpadConfig.srcPath`, which defaults to `./src/`.

**camelCase**: converts file names with spaces, hyphens, etc. to camelCase to enable easier usage in templates.
For example `foo-bar.json` becomes `@fooBar` when `true` vs `@['foo-bar']` when false.

**alwaysReload**: Default behavior is to check the `mtime` and only reload modified files during regeneration. 
When true, this check will be skipped and all files will always be reloaded. 
Note that DocPad only watches for changes in folders under `docpadConfig.srcPath`.


Config with default options in CoffeeScript:

```cs
docpadConfig = {
  plugins: {
    datafiles: 
      dataPaths: [ 'data' ],
      camelCase: true,
      alwaysReload: false
  }    
  # ...
}
module.exports = docpadConfig
```

Or JavaScript:
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

Todo:
* Support watching files for changes and only reloading changed files

