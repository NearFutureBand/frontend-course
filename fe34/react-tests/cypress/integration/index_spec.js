/// <reference types="cypress" />

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })

});


describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')

    cy.get("[data-qa='input-phone']").type('+18465683597').should("have.value", "+18465683597");

    cy.get("[data-qa='input-password']").type('123').should("have.value", "123");

    cy.get("#login").click();

    cy.wait(500);

    cy.get("[data-qa='greting']").contains("Hello, Barr Copeland");
  })
})