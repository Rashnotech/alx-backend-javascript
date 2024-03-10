const expect = require('chai').expect
const calculateNumber = require('./1-calcul.js')


describe('calculateNumber', () => {
  describe('test SUM', () => {
    it('should return 6', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6)
    })
  })
  describe('test SUBTRACT', () => {
    it('should return -4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4)
    })
  })
  describe('test DIVIDE', () => {
    it('should return 0.2', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2)
    })
    it('should return Error', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error')
    })
  })
})
