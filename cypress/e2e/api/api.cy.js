/// <reference types="cypress" />

// DATA IMPORTS
import {apiData} from '../../fixtures/api/APIData'

describe('Mercado Libre API', () => {

    it('CP-APIML-001 – Verificar existencia de departamentos', () => {

        cy.request(
            {
                method: apiData.methods.GET,
                url: `${Cypress.env('mercadoLibreApiUrl')}/menu/departments`,
                headers: {
                    'User-Agent': apiData.headers
                }
            }
        ).then((response) => {

            // Log de debug para ver la respuesta completa
            // cy.log('Body:', JSON.stringify(response.body));

            expect(response.status).to.eq(200);

            expect(response.body).to.have.property(apiData.properties.departments);

            expect(response.body.departments.length).to.be.greaterThan(0);
        })
    })

})
