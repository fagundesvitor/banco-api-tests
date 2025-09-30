const request = require('supertest');
const {expect} = require('chai');
const postLogin = require('../fixtures/postLogin.js')

// mocha para estrtuturar o teste e executa-lo
describe('Login', () => {
    describe('POST', () => {
        it('Deve retornar 200 com token em string quando usar credenciais validas', async () => {
            // usar supertest para fazer requisição a API de transferencias bancarias

            const bodyLogin = { ...postLogin }
            const resposta = await request('http://localhost:3000')
                .post('login')
                .set('Content-type', 'Application/json')
                .send(bodyLogin)    

            //usar chai para fazer asserções    
            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string'); //validar que token é do tipo string
        })
    })
})