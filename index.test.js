const request = require('supertest');
const app = require('./index')
describe('GET /',()=>{
    it('should respond with a message', async ()=>{
        const respose = await request(app)
        .get('/')
        .expect(200)
    expect(respose.body.message)
    })
})