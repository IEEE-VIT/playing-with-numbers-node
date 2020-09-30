const request = require('supertest')
const app  = require('../../app')

describe('Test dudeney route', ()=>{
  test('Should return number is not Dudeney number', async ()=>{
    await request(app)
      .post('/dudeney')
      .send({ number: 10 })
      .expect(200)
      .then((res) => {
        expect(res.body.message).toBe('The Number is Not Dudeney Number')
      })
  })

  test('Should return number is Dudeney number', async ()=>{
    await request(app)
      .post('/dudeney')
      .send({ number: 512 })
      .expect(200)
      .then((res) => {
        expect(res.body.message).toBe('The Number is Dudeney Number')
      })
  })
})