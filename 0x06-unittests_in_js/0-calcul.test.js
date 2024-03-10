const assert = require('assert');
const calculateNumber = require('./0-calcul.js')

describe('test calculateNumber', () => {
  describe('TestCases', () => {
    it('should return 4', () => {
      assert.equal(calculateNumber(1, 3), 4)
    })

    it('should return 5', () => {
      assert.equal(calculateNumber(1, 3.7), 5)
    })

    it('should return 7', () => {
      assert.equal(calculateNumber(3.2, 3.7), 7)
    })

    it('should return 6', () => {
      assert.equal(calculateNumber(1.5, 3.7), 6)
    })

    it('should return 25', () => {
      assert.equal(calculateNumber(12.2, 13.3), 25)
    })
  })
})
