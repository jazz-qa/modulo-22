// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />
import { homePage } from "./pages/home.page"
import loginPageAA from "./pages/loginAA.page"

Cypress.Commands.add('login', (email, senha) => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
    homePage.openMenu('Account')
    loginPageAA.login(email, senha)
    homePage.openMenu('Account')
})

Cypress.Commands.add('addProductToCart', () => {
    cy.get('.post-2559 > .product-block').click()
        cy.get('.product_title').should('contain', 'Abominable Hoodie')
        cy.get('.button-variable-item').eq(1).click()
    cy.get('.button-variable-item').eq(6).click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
})

Cypress.Commands.add('seeCart', () => {
    cy.get('#cart > .dropdown-toggle').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
    cy.get('.page-title').should('contain', 'Carrinho')
})

Cypress.Commands.add('cleanCart', () => {
    cy.get('.remove > .fa').click()
    cy.get('.cart-empty').should('exist')
})

Cypress.Commands.add('checkout', () => {
    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.get('.page-title').should('contain', 'Pedido recebido')
})