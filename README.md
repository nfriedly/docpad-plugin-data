docpad-plugin-datafiles
=======================

[![Build Status](https://travis-ci.org/nfriedly/docpad-plugin-datafiles.svg?branch=master)](https://travis-ci.org/nfriedly/docpad-plugin-datafiles)
[![npm-version](https://img.shields.io/npm/v/docpad-plugin-datafiles.svg)](https://www.npmjs.com/package/docpad-plugin-datafiles)

DocPad plugin for simple data files. Loads and parses JSON, YAML, JavaScript, and CoffeeScript files from `src/data/` and 
stores the contents on `config.templateData`, which makes the data available at `@filename` when rendering documents.

Forked from [docpad-plugin-data](https://github.com/SE7ENSKY/docpad-plugin-data) with several improvements:
* Better handling of filenames - now allows for dashes and other characters (use `@['file-name']` to reference the data then.)
* No annoying error about uncompiled CoffeeScript
* Documentation
* Tests

## Installation

    docpad install datafiles

## Configuration

**dataPaths**: An array of folders to search for data files in. All `dataPaths` are assumed to be subdirs of `docpadConfig.srcPath`, which defaults to `./src/`.

**alwaysReload**: When false, data files will only be loaded once at DocPad start. When true, all files will be reloaded before each regeneration.


Config with default options in CoffeeScript:

```cs
docpadConfig = {
  plugins: {
    datafiles: 
      dataPaths: [ 'data' ],
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
      alwaysReload: false
    }
  }
  // ...
};

module.exports = docpadConfig;
```

Todo:
* Support watching files for changes and only reloading changed files

