const request = require('supertest');
const {expect} = require('chai');
require ('dotenv').config (); 
const { obterToken } = require ('../helpers/autenticacao.js')

describe('Transferências', () => {
    describe('POST /transferencias', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferencia for válido', async () => {
            const token = await obterToken(vitor.anchieta, 123456);
        
            const resposta = await request(process.env.BASE_URL)
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

        it('Deve retornar 422 quando o valor da transferencia for menor que R$ 10,00', async () => {
            const token = await obterToken(vitor.anchieta, 123456);

            const resposta = await request(process.env.BASE_URL)
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