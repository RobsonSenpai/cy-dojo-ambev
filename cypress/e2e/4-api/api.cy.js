/// <reference types="cypress" />


describe('Teste de API', () => {
    
    var dojo = {
        aula: "API",
        duracao: 3,
        professor: "Fabio"
    }

    var nmero = [0, 1, 2, 3, 4, 6, 8, 10];

    var usuarios = [
        {
            "usuario":"teste003@gmail.com",
            "senha": "123456",
            "status": 2, 
            "empresa":"Ambev", 
            "website":"www.teste.com.net", 
            "local": "Curitiba, PR", 
            "conhec": "Postman, Javascript, Testes", 
            "userGit": "Teste", 
            "bio": "Realizando o sonho de aprender a testar front-end utilizando Cypress",
            "redes": [{
                "possui": true,
                "twitter": "@TesteXPTO",
                "facebook": "face.teste",
                "youtube": "Canal Teste",
                "linkedin": "Teste Teste ",
                "instagram": "@Testgram",
                "medium": "Teste Medium"
            }]
    
        },
        {
            "usuario":"teste003@gmail.com",
            "senha": "123456",
            "status": 2, 
            "empresa":"Ambev", 
            "website":"http://www.teste.com.net", 
            "local": "Curitiba, PR", 
            "conhec": " ", 
            "userGit": "Teste", 
            "bio": "Realizando o sonho de aprender a testar front-end utilizando Cypress",
            "redes": [{
                "possui": false,
                "twitter": "@TesteXPTO",
                "facebook": "face.teste",
                "youtube": "Canal Teste",
                "linkedin": "Teste Teste ",
                "instagram": "@Testgram",
                "medium": "Teste Medium"
            }]
        },
        {
            "usuario":"teste001@gmail.com",
            "senha": "123456",
            "status": 2, 
            "empresa":"Ambev", 
            "website":"http://www.teste.com.net", 
            "local": "Curitiba, PR", 
            "conhec": "Postman, Javascript, Testes", 
            "userGit": "Teste", 
            "bio": "Realizando o sonho de aprender a testar front-end utilizando Cypress",
            "redes": [{
                "possui": true,
                "twitter": "http://twitter.com/TesteXPTO",
                "facebook": "http://www.facebook.com/teste",
                "youtube": "http://youtube.com.br/CanalTeste",
                "linkedin": "http://linkedin.com/Teste_Teste",
                "instagram": "http://instagram.com/Testgram",
                "medium": "http://medim.com.br/TesteMedium"
            }]
        }
    
    
    ];

    it('Teste Dojo', () => {
    
        expect(dojo.aula).to.equal("API")
        expect(dojo.duracao).to.equal(3)
        expect(dojo.professor).contains("Fab")
    });

    it('Teste Usuario', () => {
        expect(usuarios[0].usuario).to.equal("teste003@gmail.com")
        cy.log(usuarios[1].perfil);

    });

});