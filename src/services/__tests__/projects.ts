import app from '../../server'
import supertest from 'supertest'

const request = supertest(app)

describe('Projects', () => {
    it('Gets the list of projects', async done => {
        const response = await request.get('/projects')
        expect(response.status).toBe(200)
        done()
    })
})
