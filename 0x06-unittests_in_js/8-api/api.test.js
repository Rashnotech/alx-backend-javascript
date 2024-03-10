const { expect } = require('chai')
const request = require('request')


describe('index', () => {
  it('test index', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      if (err) {
	done(err);
        return
      }
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system')
      done();
    })
  })
})


