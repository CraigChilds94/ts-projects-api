import app from '../../server'
import supertest from 'supertest'

const request = supertest(app)

describe('GET /projects', () => {
    it('Gets the list of projects', done => {
        request.get('/projects')
            .expect('Content-Type', /json/)
            .expect(200, done).expect({
                "projects": [
                    {
                        id: 1,
                        name: "Website Rebuild"
                    },
                    {
                        id: 3,
                        name: "Design Portfolio"
                    }
                ]
            })
    })
})
