const request = require('supertest')

test('/dentista', async()=>{

    await request('http://localhost:3333')
    .get('/dentista')
    .expect(200)
    .then((res)=> console.log("Passou"))
})


test('/dentista', async()=>{

    await request('http://localhost:3333')
    .post('/dentista')

    .send({
        "NOME": "Enes",
        "EMAIL": "enesabcd.com",
        "CRO": "12345",
        "ESPECIALIDADE": "Ortodonto",
    })
    .expect(200)
    .then((res)=> console.log('Passou'))
})
