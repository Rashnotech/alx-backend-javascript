const sinon = require('sinon')
const { expect } = require('chai')
const sendPaymentRequestToAPI = require('./5-payment')
const Utils = require('./utils')


describe('test sendPaymentRequestToAPI', () => {
  let con;
  beforeEach(() => {
    if (!con) con = sinon.spy(console)
  })
  afterEach(() => {
      con.log.resetHistory();
  })

  it('test Using spy', () => { 
    sendPaymentRequestToAPI(100, 20)
    expect(con.log.calledWith('The total is: 120')).to.be.true;
    expect(con.log.calledOnce).to.be.true;
  })

  it('sendPaymentRequestToAPI with 10 and 10', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(con.log.calledWith('The total is: 20')).to.be.true;
    expect(con.log.calledOnce).to.be.true
  })
})
