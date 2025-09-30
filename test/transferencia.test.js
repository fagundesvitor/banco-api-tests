const request = require('supertest');
const { expect } = require('chai');

describe('Transferências', () => {
    describe('POST /transferencias', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferencia for válido', async () => {
            const respostaLogin = await request('http://localhost:3000')
                .post('login')
                .set('Content-type', 'Application/json')
                .send({
                    'username': 'vitor.anchieta',
                    'senha': '123456'
                })

            const token = respostaLogin.body.token;

            const resposta = await request('localhost:3000')
                .post('transferencias')
                .set('Content-type', 'Applicati{on/json')
                .set('Authorization', 'Bearer ${token}')
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11,
                    token: ""
                })

            expect(resposta.status).to.equal(201);

            console.log(resposta.body);

        })

        it('Deve retornar 422 quando o valor da transferencia for menor que R$ 10,00', () => {
            const respostaLogin = await request('http://localhost:3000')
                .post('login')
                .set('Content-type', 'Application/json')
                .send({
                    'username': 'vitor.anchieta',
                    'senha': '123456'
                })

            const token = respostaLogin.body.token;

            const resposta = await request('localhost:3000')
                .post('transferencias')
                .set('Content-type', 'Applicati{on/json')
                .set('Authorization', 'Bearer ${token}')
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 9,
                    token: ""
                })

            expect(resposta.status).to.equal(422);

            console.log(resposta.body);
        })
    })
})