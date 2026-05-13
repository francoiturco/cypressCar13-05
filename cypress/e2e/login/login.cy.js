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

    it('CP-LOGIN-001 – Login exitoso con credenciales válidas', () => {
        loginPage.login(Cypress.env('standardUsername'), Cypress.env('password'));
        cartPage.verifyAppLogo(cartPageData.appLogoText);
    });

    it('CP-LOGIN-002 – Login con contraseña incorrecta', () => {
        loginPage.login(Cypress.env('standardUsername'), Cypress.env('incorrectPassword'));
        loginPage.validateError(loginPageData.loginErrorMessage);
    });
    
    it('CP-LOGIN-003 – Login con usuario inexistente', () => {
        loginPage.login(Cypress.env('incorrectUsername'), Cypress.env('password'));
        loginPage.validateError(loginPageData.loginErrorMessage); 
    });

    it('CP-LOGIN-009 – Login con usuario visual', () => {
        loginPage.login(Cypress.env('visualUsername'), Cypress.env('incorrectPassword'));
        cartPage.verifyAppLogo(cartPageData.appLogoText);
    });

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.screenshot()
        }
    });

})
