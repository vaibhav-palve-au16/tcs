const request = require('supertest');
const app = require('../../index')

describe('POST /api/v1/signup',()=>{
    it('should respond with a message', async ()=>{
        const respose = await request(app)
        .post('/api/v1/signup')
        .expect(200)
    expect(respose.body.message)
    })
})

describe('POST /api/v1/login',()=>{
    it('should respond with a message', async ()=>{
        const respose = await request(app)
        .post('/api/v1/login')
        .expect(403)
    expect(respose.body.message)
    })
})

// describe('GET /api/v1/signup',()=>{
//     it('should respond with a message', async ()=>{
//         const respose = await request(app)
//         .get('/')
//         .expect(200)
//     expect(respose.body.message)
//     })
// })