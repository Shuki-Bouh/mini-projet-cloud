import request from 'supertest';
import server from '../src/index'; // Assurez-vous que ce chemin correspond à celui de votre application

describe('GET /api/v1/sysinfo', () => {
  it('should return 200 and the correct message for /api/v1/sysinfo', async () => {
    const response = await request(server).get('/api/v1/sysinfo');
    expect(response.status).toBe(200);
    });

  it('should return 404 for any other path', async () => {
    const response = await request(server).get('/unknown');
    expect(response.status).toBe(404);
     });
});
