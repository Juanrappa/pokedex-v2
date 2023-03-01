/// <reference types="Cypress" />

describe("test infinite scroll", () => {
  const URL = "http://127.0.0.1:5500/src/index.html";
  it("test start aplication", () => {
    cy.visit(URL);
    cy.get("body").contains("bulbasaur");
  });
  it("infinite scroll", () => {
    cy.visit(URL);
    cy.get('[data-cy="card"]').should("have.length", 20);
    cy.scrollTo("bottom");
    cy.get('[data-cy="card"]').should("have.length", 40);
  });
});
