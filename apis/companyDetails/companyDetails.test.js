const request = require('supertest');
const app = require('../../index')

describe('GET /api/v1/company',()=>{
    it('should respond with a message', async ()=>{
        const respose = await request(app)
        .get('/api/v1/company')
        .expect(200)
    expect(respose.body.message)
    })
})

describe('POST /api/v1/company',()=>{
    it('should respond with a message', async ()=>{
        const respose = await request(app)
        .post('/api/v1/company')
        .expect(200)
    expect(respose.body.message)
    })
})

describe('PATCH /api/v1/company',()=>{
    it('should respond with a message', async ()=>{
        const respose = await request(app)
        .patch('/api/v1/company')
        .expect(200)
    expect(respose.body.message)
    })
})


describe('DELETE /api/v1/signup',()=>{
    it('should respond with a message', async ()=>{
        const respose = await request(app)
        .delete('/api/v1/company')
        .expect(200)
    expect(respose.body.message)
    })
})