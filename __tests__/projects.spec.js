const request = require('supertest');
const app = require('../src/app');

describe('Projects', () => {
  it('should be able to add new project', async () => {
    const response = await request(app)
      .post('/projects')
      .send({
        title: 'Novo projeto',
        owner: 'Guilherme',
      });

    expect(response.body).toEqual({
      title: 'Novo projeto',
      owner: 'Guilherme'
    })
  });

  it('should be able to list projects', async () => {
    await request(app)
      .post('/projects')
      .send({
        title: 'Novo projeto',
        owner: 'Guilherme',
      });

    const response = await request(app).get('/projects');

    expect(response.body).toEqual(
      expect.arrayContaining([
        { title: 'Novo projeto', owner: 'Guilherme' }
      ])
    )
  });
})
