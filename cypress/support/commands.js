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

/**
 * Save any field text in the temporal file runData.json, to be used in other test cases
 */
Cypress.Commands.add('saveText', (value, keyName) => {

    let valueConverted = value

        const filename = 'cypress/fixtures/runData/runData.json'

    cy.readFile(filename, {flag: 'a+'}).then(($list) => {
        $list[keyName] = valueConverted;
        cy.log(`Store the value ${valueConverted} with the key ${keyName}`)
        cy.writeFile(filename, $list);
    });
    
});

/**
 * Returns the data from temporal file runData.json, previously stored with the command saveText, to be used in other test cases
 */
Cypress.Commands.add('returnData', (value, keyName) => {

    const filename = 'cypress/fixtures/runData/runData.json'

    return cy.readFile(filename).then(($obj) => {
        return $obj
    });

});