/// <reference types="cypress" />
const faker = require('faker-br')

import usuarios from "../../fixtures/usuarios.json"

describe('Funcionalidade: Login', () => {
    
    it('Realiza Login', () => {
        cy.visit('login')
        cy.fixture('usuarios').then((user) => {
            cy.login(user[0].usuario, user[0].senha)
        })
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
        cy.get('[data-test="dashboard-noProfile"]').should('contain', 'Você não tem um perfil criado, por favor adicione algumas informações')
        cy.get('[data-test="dashboard-createProfile"]').click()
    });

    it('Valida URL Incorreta', () => {
        cy.fixture('usuarios').then((user) => {
            cy.perfis(user[0].status, user[0].empresa, user[0].website, user[0].local, user[0].conhec, user[0].userGit, user[0].bio)
        })

        cy.fixture('usuarios').then((user) => {
            if (user[0].redes[0].possui == true) {
                cy.get('[data-test="profile-socials"]').click()
                    cy.fixture('usuarios').then((user) => {
                        cy.redes(user[0].redes[0].twitter, user[0].redes[0].facebook, user[0].redes[0].youtube, user[0].redes[0].linkedin, user[0].redes[0].instagram, user[0].redes[0].medium)
                    })
            }
            cy.get('[data-test="profile-submit"]').click()
            cy.get('[data-test="profile-webSite"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
            cy.get('[data-test="profile-twitter"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
            cy.get('[data-test="profile-facebook"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
            cy.get('[data-test="profile-youtube"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
            cy.get('[data-test="profile-linkedin"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
            cy.get('[data-test="profile-linkedin"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
            cy.get('[data-test="profile-medium"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
            cy.get('[data-test="navbar-logout"] > .hide-sm').click()
            
        })        


    });

    // it('Realiza Login - Obrigatórios', () => {
    //     cy.visit('login')
    //     cy.fixture('usuarios').then((user) => {
    //         cy.login(user[1].usuario, user[1].senha)
    //     })
    //     cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    //     cy.get('[data-test="dashboard-noProfile"]').should('contain', 'Você não tem um perfil criado, por favor adicione algumas informações')
    //     cy.get('[data-test="dashboard-createProfile"]').click()
    // });


    // it('Campos Obrigatórios', () => {
    //     cy.fixture('usuarios').then((user) => {
    //         cy.perfis(user[1].status, user[1].empresa, user[1].website, user[1].local, null, user[1].userGit, user[1].bio)
    //     })

    //     cy.fixture('usuarios').then((user) => {
    //         if (user[1].redes[0].possui == true) {
    //             cy.get('[data-test="profile-socials"]').click()
    //                 cy.fixture('usuarios').then((user) => {
    //                     cy.redes(user[1].redes[0].twitter, user[1].redes[0].facebook, user[1].redes[0].youtube, user[1].redes[0].linkedin, user[1].redes[0].instagram, user[1].redes[0].medium)
    //                 })
    //         }
    //     })        
    //     cy.get('[data-test="profile-submit"]').click()
    //     cy.get('.MuiFormHelperText-root').should('contain', 'Conhecimentos é obrigatório')
    //     cy.get('[data-test="navbar-logout"] > .hide-sm').click()

    // });

    it('Realiza Login - Perfil Sucesso', () => {
        cy.visit('login')
        cy.fixture('usuarios').then((user) => {
            cy.login(user[1].usuario, user[1].senha)
        })
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
        cy.get('[data-test="dashboard-noProfile"]').should('contain', 'Você não tem um perfil criado, por favor adicione algumas informações')
        cy.get('[data-test="dashboard-createProfile"]').click()
    });

    it('Preencher Perfil', () => {
        cy.fixture('usuarios').then((user) => {
            cy.perfis(user[2].status, user[2].empresa, user[2].website, user[2].local, user[2].conhec, user[2].userGit, user[2].bio)
        })

        cy.fixture('usuarios').then((user) => {
            if (user[2].redes[0].possui == true) {
                cy.get('[data-test="profile-socials"]').click()
                    cy.fixture('usuarios').then((user) => {
                        cy.redes(user[2].redes[0].twitter, user[2].redes[0].facebook, user[2].redes[0].youtube, user[2].redes[0].linkedin, user[2].redes[0].instagram, user[2].redes[0].medium)
                    })
            }
            cy.get('[data-test="profile-submit"]').click()
            // cy.get('[data-test="navbar-logout"] > .hide-sm').click()
            
        })      


    });




});