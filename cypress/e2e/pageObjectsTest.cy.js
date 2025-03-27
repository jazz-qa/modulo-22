/// <reference types="cypress" />

const data = require("../fixtures/dataPO.json")
// const loginPagePO = require('../support/pages/loginPO.page')
// const { dashboardPage } = require('../support/pages/dashboard.page')
const {dashboardPage, loginPagePO} = require('../support/pages')

describe('Access Admin Panel', () => {
  beforeEach(() => {
    cy.visit('/wp-admin')
  })

  it('should login with valid credentials', () => {
    loginPagePO.login(data.usuario, data.senha)
    dashboardPage.siteName.should("be.visible")
  })
})