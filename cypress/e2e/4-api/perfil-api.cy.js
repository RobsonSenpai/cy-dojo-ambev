/// <reference types="cypress" />

describe('Funcionalidade Perfil via API', () => {

    let token

    beforeEach(() => {
        cy.gerarToken('fabio@teste.com', 'teste@123').then((tkn) =>{
            token = tkn;
        })
    });


    it('Consultar Usuario', () => {
        cy.request({
            method: 'POST',
            url: 'api/auth',
            body: {
                "email": "fabio@teste.com",
                "password": "teste@123"
            }
        }).then((response)=>{
            let token = response.jwt;
            
            cy.request({
                method: 'GET',
                url:'api/profile/me',
                headers:{
                    Cookie: token
                }
            }).then((response) => {

                expect(response.status).to.equal(200)
                expect(response.body.company).to.equal('Via')
                expect(response.body.skills[1]).to.equal('Java')
            })
        })
    });


    it.only('Consultar Usuario', () => {
        cy.request({
            method: 'GET',
            url:'api/profile/me',
            headers:{
                Cookie: token
            }
        }).then((response) => {

            expect(response.status).to.equal(200)
            expect(response.body.company).to.equal('Via')
            expect(response.body.skills[1]).to.equal('Java')
        })
    });

});