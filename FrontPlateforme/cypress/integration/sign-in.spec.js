/// <reference types="cypress" />

context('search-project', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200/login')
    })


    it('Création de compte', () => {
        cy.intercept('POST', 'http://localhost:8080/user/signup', {
            statusCode: 200,
            body: {
                name: 'Peter Pan',
            },
        })

        cy.intercept('POST', 'http://localhost:8080/user/signin', { fixture: '/user.json' })
        cy.get('[id="newusername"]')
            .click()
            .type("test")

        cy.get('[id="newemail"]')
            .click()
            .type("test@test.test")

        cy.get('[id="newpassword"]')
            .click()
            .type("Testtest1")

        cy.get('[id="createUser"]')
            .click()

        cy.url().should('eq', 'http://localhost:4200/profiluser')

        cy.contains('test')
    })

    it('Erreur', () => {

        cy.get('[id="newusername"]')
            .click()
            .type("test")

        cy.get('[id="newemail"]')
            .click()
            .type("test@test.test")

        cy.get('[id="newpassword"]')
            .click()
            .type("Testtest1")

        cy.get('[id="createUser"]')
            .click()

        cy.intercept('POST', 'http://localhost:8080/user/signup', {
            statusCode: 400,
            body: {
                message: 'username',
            },
        })

        cy.get('[id="createUser"]')
            .click()

        cy.get('[id="nameTaken"]')
            .should('be.visible')

        cy.intercept('POST', 'http://localhost:8080/user/signup', {
            statusCode: 400,
            body: {
                message: 'email',
            },
        })

        cy.get('[id="createUser"]')
            .click()

        cy.get('[id="mailTaken"]')
            .should('be.visible')
    })



    it('connexion', () => {

        cy.intercept('POST', 'http://localhost:8080/user/signin', { fixture: '/user.json' })
        cy.get('[id="connectusername"]')
            .click()
            .type("test")

        cy.get('[id="connectpassword"]')
            .click()
            .type("Testtest1")

        cy.get('[id="connectUser"]')
            .click()

        cy.url().should('eq', 'http://localhost:4200/profiluser')

        cy.contains('test')

    })

    it.only('connexion Erreur', () => {

        cy.intercept('POST', 'http://localhost:8080/user/signin')
        cy.get('[id="connectusername"]')
            .click()
            .type("test")

        cy.get('[id="connectpassword"]')
            .click()
            .type("Testtest1")

        cy.get('[id="connectUser"]')
            .click()

        cy.get('[id="internalError"]')
            .should('be.visible')

        cy.intercept('POST', 'http://localhost:8080/user/signin', {
            statusCode: 403,
            body: {
                message: 'username',
            },
        })
        
        cy.wait(300)

        cy.get('[id="connectUser"]')
            .click()

        cy.get('[id="loginFail"]')
            .should('be.visible')

    })
})
