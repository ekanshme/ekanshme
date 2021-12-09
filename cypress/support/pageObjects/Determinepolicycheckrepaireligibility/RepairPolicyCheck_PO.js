///<reference types="Cypress-xpath"/>

class RepairPolicyCheck_PO {
    visitHomepage(){
         cy.visit(Cypress.env('SS_TestURL'), {failOnStatusCode: false})
        cy.viewport(1280, 720)
       // cy.visit(Cypress.env('SS_DevURL'), {failOnStatusCode: false})
        //cy.viewport(1280, 720)
    }

    passRepairPolicyCheck(){
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'PeaBody Self Serve')
       // cy.url().should('include', 'test')
        cy.get('.mt-1').type(data.socialCustomer)
        cy.get('.MuiFormLabel-root').should('have.text', 'Customer ID*')
        cy.get('.button-class').should('have.text','Continue')
        cy.get('.button-class').contains('Continue').click()
        cy.wait(5000)
        cy.xpath('//h1[contains(text(),"What is your Repair Property?")]').should('have.text', 'What is your Repair Property?')
        cy.get(':nth-child(2) > .button-class').should('have.text','Continue ')
        const continueButton = cy.get('.button-class').contains('Continue')
        continueButton.click()
        cy.wait(5000)
        cy.get('h1').should('have.text', ' Where is the repair you want to report? ')
        cy.get(':nth-child(2) > .button-class').should('have.text','Continue ')
        const continueButton1 = cy.get('.button-class').contains('Continue')
        continueButton1.click()
        cy.wait(5000)
        cy.get('[data-testid=dropDownLocation]').select('Kitchen')
        cy.get('[data-testid=dropDownLocation]').should('have.value','9')
        cy.get('#high-level-repair').type('Kitchen cupboard handle broken or damaged')
        cy.get('body').click(0,0);
        cy.wait(5000)
        /*cy.get('[data-testid=inputReason]').type('Kit')
        cy.wait(5000)
        cy.get('.suggestions > *').each(($el,index,$list) => {
            const prod1 = $el.text()
            const prodToSelect1 = 'Kitchen cupboard handle broken or damaged'
            if(prod1 == prodToSelect1){
                $el.trigger('click')
            }
        })*/
    }

    failsRepairPolicyCheck(){
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'PeaBody Self Serve')
       // cy.url().should('include', 'test')
        cy.get('.mt-1').type(data.socialCustomer)
        cy.get('.MuiFormLabel-root').should('have.text', 'Customer ID*')
        cy.get('.button-class').should('have.text','Continue')
        cy.get('.button-class').contains('Continue').click()
        cy.wait(5000)
        cy.xpath('//h1[contains(text(),"What is your Repair Property?")]').should('have.text', 'What is your Repair Property?')
        cy.get(':nth-child(2) > .button-class').should('have.text','Continue ')
        const continueButton = cy.get('.button-class').contains('Continue')
        continueButton.click()
        cy.wait(5000)
        cy.get('h1').should('have.text', ' Where is the repair you want to report? ')
        cy.get(':nth-child(2) > .button-class').should('have.text','Continue ')
        const continueButton1 = cy.get('.button-class').contains('Continue')
        continueButton1.click()
        cy.wait(5000)
        cy.get('[data-testid=dropDownLocation]').select('Balcony')
        cy.get('[data-testid=dropDownLocation]').should('have.value','1')
        cy.get('#high-level-repair').type('Blinds broken or damaged')
        cy.get('body').click(0,0);
        cy.wait(5000)
       /* cy.get('[data-testid=inputReason]').type('Blinds')
        cy.wait(5000)
        cy.get('.suggestions > *').each(($el,index,$list) => {
            const prod1 = $el.text()
            const prodToSelect1 = 'Blinds broken or damaged'
            if(prod1 == prodToSelect1){
                $el.trigger('click')
                cy.wait(5000)
                cy.get('body').click(0,0);
            }
        })*/
        cy.get('[data-testid=alert-warning]').should('have.text','Unfortunately, you are not eligible for this repair.')
       cy.get(':nth-child(2) > .button-class').then((x) => {
        if (x.is("enabled")) {
          cy.log('button enabled')
        } else {
            cy.log('button disabled')
        }
      });
    }
}
export default RepairPolicyCheck_PO