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

  it('should return "0 12 * * *" when passed "At 12 pm"', function () {
    var string = "At 12 pm";
    var expectedPattern = "0 12 * * *";

    translator(string).should.equal(expectedPattern);

  });

  it('should return "* * * * *" when passed "Every day at 12 pm"', function () {
    var string = "Every day at 12 pm";
    var expectedPattern = "0 12 * * *";

    translator(string).should.equal(expectedPattern);

  });

});