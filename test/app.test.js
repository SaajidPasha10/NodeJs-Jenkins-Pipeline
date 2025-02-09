const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Import the app

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /', () => {
  it('should return Hello, World!', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
});

describe('GET /api/greet', () => {
  it('should return a greeting message', (done) => {
    chai.request(app)
      .get('/api/greet')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal('Hello from the API!');
        done();
      });
  });
});
