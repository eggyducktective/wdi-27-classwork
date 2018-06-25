const Request = require('request');

describe('Server', () => {
  let server;

  beforeAll(() => {
    server = require('../server');
  });

  afterAll(() => {
    server.close(); // shut down the server when we're finished testing
  });

  describe('GET /', () => {
    const data = {}
    beforeAll((done) => {
      // Make request to Server
      Request.get('http://localhost:3000/', (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done(); // handle, async, dont start tests until this done mehtod is called
      });
    }); // end beforeAll()

    it('returns a status 200', () => {
      expect(data.status).toBe(200);
    });

    it('should return the correct body', () => {
      expect(data.body).toBe('Hello World, want to get some EGGS?');
    });


  }); // GET /

  describe('GET /flights JSON', () => {
    const data = {}
    beforeAll((done) => {
      // Make request to Server
      Request.get('http://localhost:3000/flights', (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        data.data = JSON.parse(body);
        done(); // handle, async, dont start tests until this done mehtod is called
      });
    }); // end beforeAll()

    it('returns a status 200', () => {
      expect(data.status).toBe(200);
    });

    it('return a valid JSON result with the correct length', () => {
      // const results = JSON.parse(data.body); // turn json into an object
      // console.log(data.body, results);
      expect(data.data.length).toBe(3);
    });

    it('should return the correct list of flights', () => {
      expect(data.data[0].number).toBe('456');
    });

  }); // GET /flights


});
