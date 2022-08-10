/// <reference types="cypress" />
const faker = require('faker-br')

describe('Funcionalidade Cadastro', ()=>{

beforeEach(() => {
    cy.visit('cadastrar')
    
});

    it('Cadastro com Sucesso', () => {
        let nome = faker.name.findName()
        let email = faker.internet.email()

        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type("123456")
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type("123456")
        cy.get('[data-test="register-submit"]').click()
        cy.get('.large').should('contain', 'Dashboard')
        cy.contains('Bem-vindo').should('exist')


    });

    it('Email Repetido', () => {
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type('Teste Alternativo')
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type('teste@gmail.com')
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type("123456")
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type("123456")
        cy.get('[data-test="register-submit"]').click()
        cy.get('[data-test="alert"]').should('contain', 'Usuário já registrado')
        // cy.contains('Bem-vindo').should('exist')

        
    });
    it('Cadastro Custom', () => {
    
        let nome = faker.name.findName()
        let email = faker.internet.email()
        cy.cadastro(nome, email, '123456', '123456')
    
    
    });


});