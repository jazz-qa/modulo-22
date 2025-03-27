/// <reference types="cypress" />

describe('Checkout', () => {
  beforeEach(() => {
    cy.visit('produtos')
  });
  it('Add product to checkout', () => {
    cy.addProductToCheckout()
  })

  it.only('See cart', () => {
    cy.addProductToCheckout()
    cy.seeCart()
  })
})