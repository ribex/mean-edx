// test in terminal with:
// mocha test.js
// -or-
// mocha -g "fail" test.js -or- mocha -R dot test.js -or- mocha -R xunit test.js
// -or- 
// mocha -R nyan test.js

var assert = require('assert');

describe('my feature', function() {
    it('works', function() {
        assert.equal('A', 'A');
    });
    
    it('fails gracefully', function() {
        assert.throws(function() {
            throw 'Error!';
        });
    });
});

describe('my other feature', function() {
    it('async', function(done) {
        setTimeout(function() {
            done();
        }, 25);
    });
});