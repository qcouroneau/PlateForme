/// <reference types="cypress" />

context("search-project", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
    cy.intercept("GET", "http://localhost:8080/project/dto", {
      fixture: "/project.json",
    });
  });

  it("check home Page", () => {
    cy.log("go to new project");
    cy.get('[id="createProjectBTN"]').click();

    cy.url().should("eq", "http://localhost:4200/newproject");

    cy.log("go to home page");
    cy.get('[id="homeBTN"]').click();

    cy.url().should('eq', "http://localhost:4200/home");

    cy.get('[id="Super 1"]').click()

    cy.get('[id="goToProjectBTN"]').click()

    cy.url().should('eq', 'http://localhost:4200/project/Super_1')
  });
});
