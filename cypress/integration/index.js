it(`partytown in an iframe`, () => {
  cy.visit("/");
  cy.get("[data-cy=success]");
});
