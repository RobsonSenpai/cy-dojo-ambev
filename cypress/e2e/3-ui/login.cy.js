/// <reference types="cypress" />

import usuarios from "../../fixtures/usuarios.json"

describe('Funcionalidade: Login', () => {
    
    beforeEach(() => {
        cy.visit('login')
        
    });

    it('Deve Fazer Login com Sucesso', () => {
        cy.login('teste003@gmail.com', '123456')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });

    it('Deve Fazer Login com Sucesso com fixture', () => {
        cy.fixture('usuario').then((user) => {
            cy.login(user.email, user.senha)
        })
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });

    it.only('Deve Fazer Login com Sucesso com fixture', () => {
        cy.fixture('usuarios').then((user) => {
            cy.login(user[0].usuario, user[0].senha)
        })
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });


});