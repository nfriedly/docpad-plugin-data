path = require('path');

docpadConfig = {
  plugins: {
    datafiles:
      dataPaths: [
        'data',
        '../outside-of-src-relative'
        path.join(__dirname, 'outside-of-src-absolute')
      ]
  }
}
module.exports = docpadConfig
