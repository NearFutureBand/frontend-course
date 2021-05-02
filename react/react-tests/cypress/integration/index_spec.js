

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  });

});

describe('The Home Page', () => {
  it('should login correctly', () => {
    cy.visit('/')

    cy.get("[data-qa='input-phone']").type('+18465683597').should("have.value", "+18465683597");

    cy.get("[data-qa='input-password']").type('123').should("have.value", "123");

    cy.get("#login").click();

    cy.wait(500);

    cy.get("[data-qa='greeting']").contains("Hello, Barr Copeland");
  })
})