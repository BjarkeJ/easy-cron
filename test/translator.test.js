var should = require('chai').should();

var translator = require('../src/translator');

describe('translator', function () {
  'use strict';

  it('should return "* * * * *" when passed "Every 30 seconds"', function () {
    var string = "Every second";
    var expectedPattern = "*/30 * * * *";

    translator(string).should.equal(expectedPattern);

  });

  it('should return "*/30 * * * *" when passed "Every 30 seconds"', function () {
    var string = "Every 30 seconds";
    var expectedPattern = "*/30 * * * *";

    translator(string).should.equal(expectedPattern);

  });

  it('should return "* * * * *" when passed "Every 30 seconds"', function () {
    var string = "Every 30 seconds";
    var expectedPattern = "*/30 * * * *";

    translator(string).should.equal(expectedPattern);

  });

});