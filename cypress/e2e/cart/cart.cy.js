/// <reference types="cypress" />
// PAGES IMPORTS
import {loginPage} from '../../pages/login/LoginPage'
import {cartPage} from '../../pages/cart/CartPage'

// DATA IMPORTS
import {loginPageData} from '../../fixtures/login/LoginPageData'
import {cartPageData} from '../../fixtures/cart/CartPageData'

describe('Cart Test Cases', () => {

    beforeEach(() => {
        cy.visit('/')
        loginPage.login(Cypress.env('standardUsername'), Cypress.env('password'));
        cartPage.verifyAppLogo(cartPageData.appLogoText);
    });

    it('Successfull Login', () => {

    });

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.screenshot()
        }
    });

})
