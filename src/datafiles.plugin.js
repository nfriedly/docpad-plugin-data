'use strict';

// based on https://github.com/SE7ENSKY/docpad-plugin-data

const fs = require('fs');
const YAML = require('yamljs');
const path = require('path');

module.exports = function(BasePlugin) {
  /**
   * Datafiles plugin for Docpad
   * @constructor
   */
  const DataFilesPlugin = BasePlugin.extend({
    name: 'datafiles',

    config: {
      dataPaths: ['data'],
      alwaysReload: true
    },

    /**
     * extendTemplateData event hook
     *
     * Scans data dir(s), parses any recognized files, and loads their contents onto config.templateData
     *
     * Called automatically by Docpad
     *
     * @param {Object} opts
     * @return {DataFilesPlugin}
     */
    extendTemplateData: function(opts) {
      const templateData = opts.templateData;
      const docpadConfig = this.docpad.getConfig();
      const config = docpadConfig.plugins.datafiles || {};
      let dataPaths = config.dataPaths || ['data'];
      if (!dataPaths || !dataPaths.length) {
        this.docpad.warn('Datafiles Plugin: no dataPaths defined in configuration. No data will be loaded.');
      } else {
        dataPaths = dataPaths.map(dataPath => path.join(docpadConfig.srcPath, dataPath));
      }
      try {
        dataPaths.forEach(dataPath => {
          const dataFiles = fs.readdirSync(dataPath);
          dataFiles.forEach(dataFile => {
            const fullFilePath = path.join(dataPath, dataFile);
            const ext = path.extname(dataFile);
            const name = path.basename(dataFile, ext);
            switch (ext) {
              case '.json':
                templateData[name] = JSON.parse(
                  fs.readFileSync(fullFilePath, {
                    encoding: 'utf8'
                  })
                );
                break;
              case '.yaml':
              case '.yml':
                templateData[name] = YAML.parse(
                  fs.readFileSync(fullFilePath, {
                    encoding: 'utf8'
                  })
                );
                break;
              case '.coffee':
              case '.js':
                delete require.cache[require.resolve(fullFilePath)];
                templateData[name] = require(fullFilePath);
                break;
            }
          });
        });
      } catch (ex) {
        this.docpad.logError(ex);
      }
      return this;
    },

    /**
     * renderbefore event hook
     *
     * This is a hack to enable always reloading the content, because the extendTemplateData hook is only triggered once.
     *
     * Hopefully a better solution can be found.
     *
     * @param {Object} opts
     * @return {DataFilesPlugin}
     */
    renderBefore: function(opts) {
      const docpadConfig = this.docpad.getConfig();
      const config = docpadConfig.plugins.datafiles || {};
      if (config.alwaysReload) {
        return this.extendTemplateData(opts);
      } else {
        return this;
      }
    }
  });

  return DataFilesPlugin;
};
