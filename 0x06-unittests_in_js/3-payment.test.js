const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect
const sendPaymentRequestToApi = require('./3-payment.js');

describe('test sendPaymentRequest', () => {
  it('test Utils', () => {
    const mod = sinon.spy(Utils)

    sendPaymentRequestToApi(100, 20)
    expect(mod.calculateNumber.calledWith('SUM', 100, 20)).to.be.true
    expect(mod.calculateNumber.callCount).to.be.equal(1)
    mod.calculateNumber.restore()
  })
})
