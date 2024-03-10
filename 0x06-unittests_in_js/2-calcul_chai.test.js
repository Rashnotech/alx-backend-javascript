const { expect } = require('chai')
const calculateNumber = require('./2-calcul_chai.js')


describe('calculateNumber', () => {
  describe('test SUM', () => {
    it('should return 6', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6)
    })

    it('should return 4', () => {
      expect(calculateNumber("SUM", 0.5722, 3.4)).to.equal(4)
    })
    it('should return 12', () => {
      expect(calculateNumber("SUM", 6.4, 6.4)).to.equal(12)
    })
    it('should return 0', () => {
      expect(calculateNumber("SUM", 0.0, 0.0)).to.equal(0)
    })

    it('should return 100', () => {
      expect(calculateNumber("SUM", 69.6, 29.8)).to.equal(100)
    })
  })

  describe('test SUBTRACT', () => {
    it('should return -4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4)
    })

    it('should return -2', () => {
      expect(calculateNumber("SUBTRACT", 0.5722, 3.4)).to.equal(-2)
    })
    it('should return 0', () => {
      expect(calculateNumber("SUBTRACT", 6.4, 6.4)).to.equal(0)
    })
    it('should return 0', () => {
      expect(calculateNumber("SUBTRACT", 0.0, 0.0)).to.equal(0)
    })

    it('should return 40', () => {
      expect(calculateNumber("SUBTRACT", 69.6, 29.8)).to.equal(40)
    })
  })

  describe('test DIVIDE', () => {
    it('should return 0.2', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2)
    })
    it('should return Error', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error')
    })
    it('should return 0.25', () => {
      expect(calculateNumber("DIVIDE", 1, 3.7)).to.equal(0.25)
    });

    it('should return 4', () => {
      expect(calculateNumber("DIVIDE", 3.7, 1.2)).to.equal(4)
    })

    it('should return 2', () => {
      expect(calculateNumber("DIVIDE", 5.5, 3.4)).to.equal(2)
    })

    it('should return 1', () => {
      expect(calculateNumber("DIVIDE", 3.5722, 3.7)).to.equal(1)
    })

    it('should return 0', () => {
      expect(calculateNumber("DIVIDE", 0.22, 3.4)).to.equal(0)
    })

  })
})
