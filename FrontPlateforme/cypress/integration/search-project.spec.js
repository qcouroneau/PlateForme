/// <reference types="cypress" />

context('search-project', () =>{
    beforeEach(() => {
        cy.visit('http://localhost:4200/searchproject')
        cy.fixture('/project.json')
        cy.fixture('/category.json')
        
      })
    it('Recherche par nom', () => {
        cy.intercept('GET', 'http://localhost:8080/project/dto', { fixture: '/project.json' })
        cy.intercept('http://localhost:8080/category/dto', { fixture: '/category.json' })

        cy.wait(300)

        cy.get('[data-test-id="input-name"]')
        .click()
        .type("super")

        cy.get('.card')
        .its('length')
        .should('be.eq', 2)
        
    })

    it('Filtre par cétegorie / OR', () => {
        cy.intercept('GET', 'http://localhost:8080/project/dto', { fixture: '/project.json' })
        cy.intercept('http://localhost:8080/category/dto', { fixture: '/category.json' })

        cy.wait(300)

        cy.get('[data-test-id="category-filter"]')
        .click()
        .type("nat")
        .wait(300)
        .find('li')
        .get('.p-autocomplete-item')
        .click()
        
        cy.get('.card')
        .its('length')
        .should('be.eq', 3)

        cy.get('[data-test-id="category-filter"]')
        .click()
        .type("fin")
        .wait(300)
        .find('li')
        .get('.p-autocomplete-item')
        .click()

        cy.get('.card')
        .its('length')
        .should('be.eq', 5)
    })

    it.only('Filtre par cétegorie / AND', () => {
        cy.intercept('GET', 'http://localhost:8080/project/dto', { fixture: '/project.json' })
        cy.intercept('http://localhost:8080/category/dto', { fixture: '/category.json' })

        cy.wait(300)

        cy.get('[data-test-id="query-option"]')
        .click()
        .get('[class="p-ripple p-element p-dropdown-item"]')
        .click()

        cy.get('[data-test-id="category-filter"]')
        .click()
        .type("nat")
        .wait(300)
        .find('li')
        .get('.p-autocomplete-item')
        .click()
        
        cy.get('.card')
        .its('length')
        .should('be.eq', 2)

        cy.get('[data-test-id="category-filter"]')
        .click()
        .type("fin")
        .wait(300)
        .find('li')
        .get('.p-autocomplete-item')
        .click()

        cy.get('.card')
        .its('length')
        .should('be.eq', 5)
    })

}
)