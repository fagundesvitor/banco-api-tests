const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao.js')
const postTransferencias = require('../fixtures/postTransferencias.js')

describe('Transferências', () => {
    describe('POST /transferencias', () => {
        let token

        beforeEach(async () => {
            token = await obterToken(vitor.anchieta, 123456);
        })

        it('Deve retornar sucesso com 201 quando o valor da transferencia for válido', async () => {
            const bodyTransferencias = { ...postTransferencias }
            const resposta = await request(process.env.BASE_URL)
                .post('transferencias')
                .set('Content-type', 'Applicati{on/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)
            expect(resposta.status).to.equal(201);
            console.log(resposta.body);
        })

        it('Deve retornar 422 quando o valor da transferencia for menor que R$ 10,00', async () => {
            const bodyTransferencias = { ...postTransferencias }
            body.bodyTransferencias.valor = 7;
            const resposta = await request(process.env.BASE_URL)
                .post('transferencias')
                .set('Content-type', 'Applicati{on/json')
                .set('Authorization', 'Bearer ${token}')
                .send(bodyTransferencias)
            expect(resposta.status).to.equal(422);
            console.log(resposta.body);
        })
    })
})