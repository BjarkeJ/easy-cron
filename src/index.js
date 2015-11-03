var translator = require('./translator');

module.exports = {

  cronPattern: function (string) {
    'use strict';

    var pattern = translator(string);
    return pattern;

  }

};