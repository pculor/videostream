const request = require('supertest');
const {
  OK, NOT_FOUND,
} = require('request-response-handler');
const server = require('../api/server');

describe('server', () => {
  it('[GET]/ 200 response if valid endpoints works', async () => {
    const res = await request(server)
      .get('/')
      .expect(OK)
      .expect('Content-Type', /json/);
    expect(res.body).toHaveProperty('body');
    expect(res.body.body).toEqual({
      service_url: {
        root: '/api/v1/',
      },
    });
    expect(res.body.message).toEqual('Welcome to API root');
    expect(res.body.statusCode).toEqual(OK);
    expect(res.body.success).toEqual(true);
  });
  it('[GET]/ 404 Fail for invalid routes', () => request(server).get('/wrong').expect(NOT_FOUND));
});
