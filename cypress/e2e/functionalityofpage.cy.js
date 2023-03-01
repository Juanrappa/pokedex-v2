describe("test of functionalitiofpage", () => {
  const URL = "http://127.0.0.1:5500/src/index.html";

  it("test menu", () => {
    cy.visit(URL);
    cy.get('[data-cy="button-menu"]').click();
    cy.get("#menu").should("not.have.class", "hidden");
    cy.get('[data-cy="button-menu"]').click();
    cy.get("#menu").should("have.class", "hidden");
  });
});
