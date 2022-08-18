/// <reference types="cypress" />

describe('Funcionalidade Perfil via API', () => {

    let token

    // beforeEach(() => {
    //     cy.gerarToken('fabio@teste.com', 'teste@123').then((tkn) =>{
    //         token = tkn;
    //     })
    // });
    
    it('Cadastrar e Remover com Sucesso', () => {
        
        var email = `teste${Math.floor(Math.random() * 100000)}@teste.com`;
        cy.log("olar")


        cy.request({ //Faz a inclusao de um novo perfil
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
            expect(response.duration).be.lessThan(1500)
            token = response.body.jwt;
            
            cy.request({ //Valida se o usuario se encontra na base de dados
                method: 'GET',
                url: 'api/auth',
                headers:{
                    Cookie: token
                }
                }).then((response) => {
                    expect(response.status).to.equal(200)
                    expect(response.body.name).to.equal("Teste teste")
                    expect(response.body.email).to.equal(email)
                    
                    cy.request({ // Realiza a Remocao do Usuario recém criado
                        method: 'DELETE',
                        url: 'api/profile',
                        headers:{
                            Cookie: token
                        }
                        }).then((response) => {
                            expect(response.status).to.equal(200)
                            expect(response.body.msg).to.equal("Usuário removido")
                            
                            cy.request({ //Valida se o usuario se encontra na base de dados
                                method: 'GET',
                                url: 'api/auth',
                                headers:{
                                    Cookie: token
                                }
                            }).then((response) => {
                                    expect(response.status).to.equal(200)
                                    expect(response.body).to.equal(null)
                            })
                
                        })
                })

        })
        


    });

});