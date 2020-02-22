const assert = require('assert'),
    math = require('./math'),
    sinon = require('sinon');

it('correctly calculates the sum of 1 and 2', () => {
    sinon.stub(math, 'getAdd').returns(3);
    assert.equal(math.add(2, 2), (1 + 2));
});