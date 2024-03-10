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

  it('test /cart/:id/(//d+)', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
      if (err) {
        done(err);
	return;
      }
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 12');
      done();
    })
  })

  it('test /cart/:id/(//d+)', () => {
    request.get('http://localhost:7865/cart/hello', (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
    })
  })

  it('test /cart/:id/(//d+)', () => {
    request.get('http://localhost:7865/cart/abc123!', (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
    })
  })

  it('test /login', (done) => {
    request.post('http://localhost:7865/login', {json: {userName: 'Funded'}}, (err, res, body) => {
      if (err) {
        done(err);
	return
      }
      expect(res.statusCode).to.be.equal(200)
      expect(body).to.be.equal('Welcome Funded');
      done();
    })
  })

  it('test /available_payments', (done) => {
    request.get('http://localhost:7865/available_payments', (err, res, body) => {
    if (err) {
      done(err);
      return;
    }
    expect(res.statusCode).to.be.equal(200);
    expect(JSON.parse(body)).to.be.deep.equal({
      payment_methods: {
        credit_cards: true,
	paypal: false
      }
    });
      done();
    })
  })
})


