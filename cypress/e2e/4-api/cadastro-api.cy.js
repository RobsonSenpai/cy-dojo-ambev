/// <reference types="cypress" />

describe('Funcionalidade Cadastro API', () => {
    it('Cadastrar com Sucesso', () => {
        
        var email = `teste${Math.floor(Math.random() * 100000)}@teste.com`;
        
        cy.request({
            method: 'POST',
            url: '/api/users',
            body: {
                "name": "Teste teste",
                "email": email,
                "password": "123456"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('jwt')
            expect(response.duration).be.lessThan(500)
        })


    });
});