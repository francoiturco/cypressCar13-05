/// <reference types="cypress" />
// PAGES IMPORTS
import {loginPage} from '../../pages/login/LoginPage'
import {cartPage} from '../../pages/cart/CartPage'

// DATA IMPORTS
import {loginPageData} from '../../fixtures/login/LoginPageData'
import {cartPageData} from '../../fixtures/cart/CartPageData'

describe('Login Test Cases', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('Successfull Login', () => {
        loginPage.login(Cypress.env('standardUsername'), Cypress.env('password'));
        cartPage.verifyAppLogo(cartPageData.appLogoText);
    });

    it('Failed Login', () => {
        loginPage.login(Cypress.env('incorrectUsername'), Cypress.env('password'));
        loginPage.validateError(loginPageData.loginErrorMessage); 
    });

    it('Visual User Successfull Login', () => {
        loginPage.login(Cypress.env('visualUsername'), Cypress.env('incorrectPassword'));
        cartPage.verifyAppLogo(cartPageData.appLogoText);
    });

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.screenshot()
        }
    });

})
