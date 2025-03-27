/// <reference types="cypress"/>
import myAccountPage from '../support/pages/myAccount.page';

describe('Sign Up', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
    });
    it('Successful registration', () => {
      myAccountPage.register()
    });

    it('Already registered', () => {
      myAccountPage.alreadyRegistered()
    });
});