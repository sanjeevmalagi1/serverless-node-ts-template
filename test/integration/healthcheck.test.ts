import request from 'supertest';

import app from '../../src/app';

describe('healthcheck route', () => {
  describe('GET /healthcheck', () => {
    test('should respond with 200 OK', async () => {
      await request(app).get('/healthcheck').expect(200);
    });
  });
});
