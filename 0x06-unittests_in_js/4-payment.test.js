const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect
const sendPaymentRequestToApi = require('./3-payment.js');

describe('test sendPaymentRequest', () => {
  it('test Utils', () => {
    const con = sinon.spy(console)
    const mod = sinon.stub(Utils, 'calculateNumber').returns(10)

    sendPaymentRequestToApi(100, 20)
    expect(mod.calledWith('SUM', 100, 20)).to.be.true
    expect(mod.callCount).to.be.equal(1)

    expect(con.log.calledWith('The total is: 10')).to.be.true
    expect(con.log.callCount).to.be.equal(1)
    mod.restore()
    con.log.restore()
  })
})
