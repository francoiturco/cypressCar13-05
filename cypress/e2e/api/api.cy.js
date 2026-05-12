/// <reference types="cypress" />

describe('Mercado Libre API', () => {

    it('Should contain departments', () => {

        cy.request(
            'GET',
            'https://www.mercadolibre.com.ar/menu/departments'
        ).then((response) => {

            expect(response.status).to.eq(200)

            expect(response.body)
                .to.have.property('departments')

            expect(response.body.departments.length)
                .to.be.greaterThan(0)
        })
    })
})
