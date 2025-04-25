/// <reference types="cypress" />
const { email, senha } = require('../fixtures/dataAA.json')
describe('Carrinho - Intercept', () => {
  it('Cart must have item(s)', () => {
    cy.intercept('GET', '**/public/getCart?userId=67f55de836e994dfd8baa11a', { fixture: 'cart.json' }).as('cart')
    cy.login(email, senha)
    cy.get('div[style*="font-size: 25px"]').filter(':visible').eq(1).click();
    cy.get('[data-testid="productName"]').should('exist')
  })
  it('Cart must be empty', () => {
    cy.intercept('GET', '**/public/getCart?userId=67f55de836e994dfd8baa11a', { fixture: 'emptyCart.json' }).as('emptyCart')
    cy.login(email, senha)
    cy.get('div[style*="font-size: 25px"]').filter(':visible').eq(1).click();
    cy.get('[data-testid="emptyCart"]').should('exist')
  })
})