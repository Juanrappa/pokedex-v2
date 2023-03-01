describe("intercept fetch", () => {
  const URL = "http://127.0.0.1:5500/src/index.html";
  it("fetch bulbasaur", () => {
    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon/1", {
      fixture: "bulbasaur.json",
    }).as("intercept-bulbasaur");
    cy.visit(URL);
    cy.get('[data-name="bulbasaur"]').should("be.visible");
  });
});
