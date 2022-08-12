// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('cadastro', (nome, email, senha, senha2) => { 

    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(senha2)
    cy.get('[data-test="register-submit"]').click()


 })

 Cypress.Commands.add('login', (email, senha) => { 

    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="login-submit"]').click()


 })

 Cypress.Commands.add('perfis', (status, empresa, website, local, conhec, userGit, bio) => { 
   
   cy.get('#mui-component-select-status').click();
   cy.get('[data-test="status-' +status +'"]').click();
   cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(empresa)
   cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(website)
   cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(local)
   cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(conhec)
   cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type(userGit)
   cy.get('[data-test="profile-bio"] > .MuiInputBase-root').type(bio)

})

Cypress.Commands.add('redes', (twitter, face, youtube, linkedin, insta, medium) => { 

   cy.get('[data-test="profile-twitter"] > .MuiInputBase-root > .MuiInputBase-input').type(twitter)
   cy.get('[data-test="profile-facebook"] > .MuiInputBase-root > .MuiInputBase-input').type(face)
   cy.get('[data-test="profile-youtube"] > .MuiInputBase-root > .MuiInputBase-input').type(youtube)
   cy.get('[data-test="profile-linkedin"] > .MuiInputBase-root > .MuiInputBase-input').type(linkedin)
   cy.get('[data-test="profile-instagram"] > .MuiInputBase-root > .MuiInputBase-input').type(insta)
   cy.get('[data-test="profile-medium"] > .MuiInputBase-root > .MuiInputBase-input').type(medium)

})

Cypress.Commands.add('gerarToken', (email, senha) => {
   cy.request({
      method: 'POST',
      url: 'api/auth',
      body: {
         "email": email,
         "password": senha
      }
      
   }).then((response) => {
      return response.jwt
   })
})
