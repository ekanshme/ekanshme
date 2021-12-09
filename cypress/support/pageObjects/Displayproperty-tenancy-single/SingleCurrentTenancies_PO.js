///<reference types="Cypress-xpath"/>

class SingleCurrentTenancies_PO {
    visitHomepage(){
        cy.visit(Cypress.env('SS_TestURL'), {failOnStatusCode: false})
        cy.viewport(1280, 720)
      //  cy.visit(Cypress.env('SS_DevURL'), {failOnStatusCode: false})
       // cy.viewport(1280, 720)
    }

    enterCustIDandContinue(){
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'PeaBody Self Serve')
       // cy.url().should('include', 'test')
        cy.get('.mt-1').type(data.singleTenantCustomer)
        cy.get('.MuiFormLabel-root').should('have.text', 'Customer ID*')
        cy.get('.button-class').should('have.text','Continue')
        cy.get('.button-class').contains('Continue').click()
        cy.wait(5000)
        cy.get('h1').should('have.text', ' Where is the repair you want to report? ')
    }
}
export default SingleCurrentTenancies_PO