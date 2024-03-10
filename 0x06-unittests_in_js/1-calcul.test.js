const assert = require('assert')
const calculateNumber = require('./1-calcul.js')


describe('calculateNumber', () => {
  describe('TestCases', () => {
    it('should return 6', () => {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6)
    })
    it('should return -4', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
    })

    it('should return 0.2', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
    })
    it('should return Error', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error')
    })
  })
})
