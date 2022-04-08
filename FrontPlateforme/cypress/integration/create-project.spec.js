/// <reference types="cypress" />

const { O_TRUNC } = require("constants");

describe("create project", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/newproject");
    cy.intercept("GET", "http://localhost:8080/category/dto", {
      fixture: "/category.json",
    });
    cy.intercept("POST", "http://localhost:8080/project/create", {
      fixture: "/created_project.json",
    });
    cy.intercept(
      "GET",
      "http://localhost:8080/project/dto/getByName/new%20project",
      {
        fixture: "/created_project.json",
      }
    );
  });

  it("create a valid project", () => {
    cy.get('[id="name"] ').click().type("new project");

    cy.get('[id="budget"] ').click().type("20");

    cy.get('[id="description"] ').click().type("Project description");

    cy.get('[id="categories"]')
      .click()
      .type("nat")
      .wait(300)
      .find("li")
      .get(".p-autocomplete-item")
      .click();

    cy.get('[id="addNewTask"]').click();

    cy.wait(300);

    cy.get('[id="nameModale"]').click().type("New Task");

    cy.get('[id="descriptionModale"]').click().type("Task description");

    cy.get('[id="categoriesModale"]')
      .click()
      .type("nat")
      .wait(300)
      .find("li")
      .get(".p-autocomplete-item")
      .click();

    cy.get('[id="newTask"]').click();

    cy.get('[id="saveProject"]').click();

    cy.url().should("eq", "http://localhost:4200/project/new_project");
  });

  it("check require", () => {
    cy.get('[id="saveProject"]').click();
    cy.get('[id="name-help"]').should("be.visible");
    cy.get('[id="name"] ').click().type("new project");

    cy.get('[id="saveProject"]').click();
    cy.get('[id="budget"] ').click().type("20");

    cy.get('[id="saveProject"]').click();
    cy.get('[id="description-help"]').should("be.visible");
    cy.get('[id="description"] ').click().type("Project description");

    cy.get('[id="saveProject"]').click();
    cy.get('[id="categories-help"]').should("be.visible");
    cy.get('[id="categories"]')
      .click()
      .type("nat")
      .wait(300)
      .find("li")
      .get(".p-autocomplete-item")
      .click();

    cy.get('[id="saveProject"]').click();
    cy.get('[id="addNewTask"]').click();

    cy.wait(300);

    cy.get('[id="newTask"]').click();
    cy.get('[id="nameModale-help"]').should("be.visible");
    cy.get('[id="nameModale"]').click().type("New Task");

    cy.get('[id="newTask"]').click();
    cy.get('[id="descriptionModale-help"]').should("be.visible");
    cy.get('[id="descriptionModale"]').click().type("Task description");

    cy.get('[id="newTask"]').click();
    cy.get('[id="categoriesModale-help"]').should("be.visible");
    cy.get('[id="categoriesModale"]')
      .click()
      .type("nat")
      .wait(300)
      .find("li")
      .get(".p-autocomplete-item")
      .click();

    cy.get('[id="newTask"]').click();

    cy.get('[id="saveProject"]').click();

    cy.url().should("eq", "http://localhost:4200/project/new_project");
  });
});
