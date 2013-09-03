'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.flipcss = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options.css');
    var expected = grunt.file.read('test/expected/default_options.css');
    test.equal(actual, expected, 'should replace left with right and vice versa, ltr with rtl and vice versa, flip margin and padding and ...');

    test.done();
  },
  custom_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_options.css');
    var expected = grunt.file.read('test/expected/custom_options.css');
    test.equal(actual, expected, 'should not replace left with right and vice versa');

    test.done();
  },
};