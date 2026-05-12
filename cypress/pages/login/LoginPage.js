class LoginPage {

    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessageSelector: () => cy.get('[data-test="error"]'),
        errorMessage: () => cy.get('h3[data-test="error"]')
    }

    login (username, password) {
        this.elements.usernameInput().type(username)
        this.elements.passwordInput().type(password)
        this.elements.loginButton().click()
    }

    validateError (message) {
        this.elements.errorMessage().should('be.visible').and('contain.text', message)
    }
}

export const loginPage = new LoginPage()