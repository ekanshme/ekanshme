///<reference types="Cypress-xpath"/>

class HighLevelPolicyCheck_PO {
    visitHomepage(){
          cy.visit(Cypress.env('SS_TestURL'), {failOnStatusCode: false})
        cy.viewport(1280, 720)
      //  cy.visit(Cypress.env('SS_DevURL'), {failOnStatusCode: false})
       // cy.viewport(1280, 720)
    }

    highLevelDescFound(){
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
        cy.get('[data-testid=dropDownLocation]').select('Landing')
        cy.get('[data-testid=dropDownLocation]').should('have.value','10')
        cy.wait(5000)
        cy.get('#high-level-repair').type('Front or back door latch broken or damaged')
        cy.get('body').click(0,0);
        cy.wait(5000)
        /*cy.get('[data-testid=inputReason]').type('l')
        cy.wait(5000)
        cy.get('.suggestions > *').each(($el,index,$list) => {
            const prod1 = $el.text()
            const prodToSelect1 = 'Front or back door latch broken or damaged'
            if(prod1 == prodToSelect1){
                $el.trigger('click')
                cy.wait(5000)
                cy.get('body').click(0,0);
            }
        })*/
    }

    highLevelDescNotFound(){
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
        cy.get('[data-testid=dropDownLocation]').select('Utility room')
        cy.get('[data-testid=dropDownLocation]').should('have.value','17')
        cy.wait(5000)
        cy.get('#high-level-repair').type('laaaaaaaa')
        cy.get('body').click(0,0);
        cy.wait(5000)
        cy.get('.alert').should('have.text','No matching repairs found, please try a different search term')
    }

    highLevelDescReSelected(){
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
        cy.get('#high-level-repair').type('Front or back door latch broken or damaged')
        cy.get('body').click(0,0);
        cy.wait(5000)
       /* cy.get('[data-testid=inputReason]').type('l')
        cy.wait(5000)
        cy.get('.suggestions > *').each(($el,index,$list) => {
            const prod1 = $el.text()
            const prodToSelect1 = 'Front or back door latch broken or damaged'
            if(prod1 == prodToSelect1){
                $el.trigger('click')
                cy.wait(5000)
                cy.get('body').click(0,0);
            }
        })*/
       cy.get(':nth-child(2) > .button-class').then((x) => {
        if (x.is("enabled")) {
          cy.log('button enabled')
          
        } else {
            cy.log('button disabled')
        }
      });
}
}
export default HighLevelPolicyCheck_PO