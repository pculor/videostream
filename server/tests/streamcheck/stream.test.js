const server = require('../../api/server');
const request = require('supertest')(server);
const mockStream = require('../mock/stream.mock');

const baseUrl = '/api/v1';

describe('Check Streams', () => {
    describe('[POST] /api/v1/stream', () => {
      it('system should create streams if sessions are less than 3', async () => {
        const res = await request
          .post(`${baseUrl}/stream`)
          .set('Content-Type', 'application/json')
          .send(mockStream.validInput);
        expect(res.statusCode).toBe(201);
        expect(res.body.success).toEqual(true);
      });
    });
  });