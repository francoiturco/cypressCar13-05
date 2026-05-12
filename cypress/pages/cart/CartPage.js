class CartPage {

    elements = {
        appLogo: () => cy.get('.app_logo'),
    }

    verifyAppLogo (appLogoText) {
        this.elements.appLogo().should('be.visible').and('have.text', appLogoText)
    }

}

export const cartPage = new CartPage()