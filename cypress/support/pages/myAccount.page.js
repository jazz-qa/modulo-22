/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

class MyAccountPage {
    get #email() { return cy.get('#reg_email')}
    get #pass() { return cy.get('#reg_password')}
    get #register() { return cy.get(':nth-child(4) > .button')}
    get #myaccount() { return cy.get('.page-title')}
    get #error() { return cy.get('.woocommerce-error')}

    register(){
        this.#email.type(faker.internet.email())
        this.#pass.type(faker.internet.password())
        this.#register.click()
        this.#myaccount.should('contain', 'Minha conta')
    }

    alreadyRegistered(){
        this.#email.type('jazzqa@gmail.com')
        this.#pass.type(faker.internet.password())
        this.#register.click()
        this.#error.should('contain', 'Erro: Uma conta já está registrada com seu endereço de e-mail.')
    }
}

module.exports = new MyAccountPage()