///<reference types="Cypress-xpath"/>

class PropertyTypeCheck_PO {
    selectPropertyType(){
        cy.visit(Cypress.env('SS_TestURL'), {failOnStatusCode: false})
        cy.viewport(1280, 720)
      //   cy.visit(Cypress.env('SS_DevURL'), {failOnStatusCode: false})
      //  cy.viewport(1280, 720)
    }

    enterCustIDandContinue(){
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'PeaBody Self Serve')
      //  cy.url().should('include', 'test')
        cy.get('.mt-1').type(data.singleCustomer)
        cy.get('.MuiFormLabel-root').should('have.text', 'Customer ID*')
        cy.get('.button-class').should('have.text','Continue')
        cy.get('.button-class').contains('Continue').click()
        cy.wait(5000)
    }
}
export default PropertyTypeCheck_PO