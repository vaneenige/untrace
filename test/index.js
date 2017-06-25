import { expect } from 'chai';
import sinon from 'sinon';
import untrace from './../src';

describe('untrace', () => {
  it('should be an object', () => {
    expect(untrace).to.be.an('object');
  });

  it('should contain a start function', () => {
    expect(untrace).to.have.property('start').which.is.a('function');
  });

  it('should contain a send function', () => {
    expect(untrace).to.have.property('send').which.is.a('function');
  });

  describe('start()', () => {
    it('should add a browser to localStorage', () => {
      untrace.start();
      expect(localStorage.getItem('browser')).to.be.a('string');
    });
  });

  describe('send()', () => {
    let request = null;

    before(() => {
      global.XMLHttpRequest = sinon.useFakeXMLHttpRequest();
      global.XMLHttpRequest.onCreate = (req) => { request = req; };

      const type = 'performance';
      const value = '200ms';
      untrace.send({ type, value });
    });

    it('should have a request method of POST', () => {
      expect(request.method).to.equal('POST');
    });

    it('should have the content type header of JSON', () => {
      const requestHeaders = request.requestHeaders;
      expect(requestHeaders['Content-type']).to.match(/application\/json/);
    });

    it('should have custom parameters in request body', () => {
      const requestBody = JSON.parse(request.requestBody);
      expect(requestBody).to.have.property('type');
      expect(requestBody).to.have.property('value');
    });

    it('should have static parameters in request body', () => {
      const requestBody = JSON.parse(request.requestBody);
      expect(requestBody).to.have.property('browser');
      expect(requestBody).to.have.property('session');
    });
  });
});
