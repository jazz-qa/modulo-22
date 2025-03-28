/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

class CheckoutPage {
    get #firstName() { return cy.get('#billing_first_name')}
    get #lastName() { return cy.get('#billing_last_name')}
    get #address() { return cy.get('#billing_address_1')}
    get #city() { return cy.get('#billing_city')}
    get #postCode() { return cy.get('#billing_postcode')}
    get #phone() { return cy.get('#billing_phone')}
    get #email() { return cy.get('#billing_email')}

    checkout(){
        this.#firstName.type(faker.person.firstName())
        this.#lastName.type(faker.person.lastName())
        this.#address.type(faker.location.streetAddress())
        this.#city.type(faker.location.city())
        this.#postCode.type("80800800")
        this.#phone.type("999999999")
        this.#email.type(faker.internet.email())
    }
}

module.exports = new CheckoutPage()