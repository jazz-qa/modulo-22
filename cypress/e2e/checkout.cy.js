/// <reference types="cypress" />
import checkoutPage from "../support/pages/checkout.page"
describe('Checkout', () => {
  beforeEach(() => {
    cy.visit('produtos')
  });
  it('Complete checkout', () => {
    cy.addProductToCart()
    cy.seeCart()
    cy.get('.checkout-button').click()
    checkoutPage.checkout()
    cy.checkout()
  })
  it('Clean cart', () => {
    cy.addProductToCart()
    cy.seeCart()
    cy.cleanCart()
  })
})