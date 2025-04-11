/// <reference types="cypress" />
const { email, senha } = require('../fixtures/dataAA.json')
describe('Carrinho - Intercept', () => {
  it.only('Cart must have item(s)', () => {
    cy.intercept('GET', '**/public/getCart?userId=67f55de836e994dfd8baa11a', { fixture: 'cart.json' }).as('cart')
    cy.login(email, senha)
    cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .css-146c3p1').click()
    cy.get('[data-testid="productName"]').should('exist')
  })
  it('Cart must be empty', () => {
    cy.intercept('GET', '**/public/getCart?userId=67f55de836e994dfd8baa11a', { fixture: 'emptyCart.json' }).as('emptyCart')
    cy.login(email, senha)
    cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .css-146c3p1').click()
    cy.get('[data-testid="emptyCart"]').should('exist')
  })
})