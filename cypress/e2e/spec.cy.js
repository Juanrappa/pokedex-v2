describe("test of functionalitiofpage", () => {
  it("test sendToAGithub", () => {
    const URLGITHUB = "https://github.com/Juanrappa/pokedex-v2";
    cy.visit("http://127.0.0.1:5500/src/#");
    cy.get('[data-cy="redirectingToGithub"]').should("be.visible").click();

    cy.url().should("eq", URLGITHUB);
  });
});
