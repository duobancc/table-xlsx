'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/table-xlsx.production.js');
} else {
  module.exports = require('./dist/table-xlsx.development.js');
}
