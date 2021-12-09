///<reference types="Cypress-xpath"/>

class HeatingHotWaterCommunalPropertyDetermination_PO {
    visitHomepage() {
        cy.visit(Cypress.env('SS_TestURL'), { failOnStatusCode: false })
        cy.viewport(1280, 720)
        //cy.visit(Cypress.env('SS_DevURL'), {failOnStatusCode: false})
        //cy.viewport(1280, 720)
    }

    correctPropertyHierarchySelected() {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'PeaBody Self Serve')
        cy.url().should('include', 'test')
        cy.get('.mt-1').type(data.socialCustomer)
        cy.get('.MuiFormLabel-root').should('have.text', 'Customer ID*')
        cy.get('.button-class').should('have.text', 'Continue')
        cy.get('.button-class').contains('Continue').click()
        cy.wait(5000)
        cy.xpath('//h1[contains(text(),"What is your Repair Property?")]').should('have.text', 'What is your Repair Property?')
        cy.get(':nth-child(2) > .button-class').should('have.text', 'Continue ')
        const continueButton = cy.get('.button-class').contains('Continue')
        continueButton.click()
        cy.wait(5000)
        cy.get('h1').should('have.text', ' Where is the repair you want to report? ')
        cy.get(':nth-child(2) > .button-class').should('have.text', 'Continue ')
        const continueButton1 = cy.get('.button-class').contains('Continue')
        continueButton1.click()
        cy.wait(5000)
        cy.get('[data-testid=dropDownLocation]').select('External')
        cy.get('[data-testid=dropDownLocation]').should('have.value', '5')
        cy.get('#high-level-repair').type('Heating or hot water repair')
        cy.get('body').click(0, 0);
        cy.wait(5000)
        /* cy.get('[data-testid=inputReason]').type('b')
         cy.wait(5000)
         cy.get('.suggestions > *').each(($el,index,$list) => {
             const prod1 = $el.text()
             const prodToSelect1 = 'Aids and adaptation installation'
 
             if(prod1 == prodToSelect1){
                 $el.trigger('click')
                 cy.wait(5000)
                 const continueButton2 = cy.get('.button-class').contains('Continue')
                 continueButton2.click()
                 cy.wait(5000)
             }
         })*/
        cy.get('.button-class').contains('Continue').click()
        cy.wait(5000)
        cy.get('h1').should('have.text', '  This repair is being raised as an emergency. Will someone over 18 be at home in the next four hours to let our contractor in? ')
    }

    inCorrectPropertyHierarchySelected() {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'PeaBody Self Serve')
        cy.url().should('include', 'test')
        cy.get('.mt-1').type(data.socialTenantCustomer)
        cy.get('.MuiFormLabel-root').should('have.text', 'Customer ID*')
        cy.get('.button-class').should('have.text', 'Continue')
        cy.get('.button-class').contains('Continue').click()
        cy.wait(5000)
      /*  cy.xpath('//h1[contains(text(),"What is your Repair Property?")]').should('have.text', 'What is your Repair Property?')
        cy.get(':nth-child(2) > .button-class').should('have.text', 'Continue ')
        const continueButton = cy.get('.button-class').contains('Continue')
        continueButton.click()
        cy.wait(5000)*/
        cy.get('h1').should('have.text', ' Where is the repair you want to report? ')
        cy.get(':nth-child(2) > .button-class').should('have.text', 'Continue ')
        const continueButton1 = cy.get('.button-class').contains('Continue')
        continueButton1.click()
        cy.wait(5000)
        cy.get('[data-testid=dropDownLocation]').select('External')
        cy.get('[data-testid=dropDownLocation]').should('have.value', '5')
        cy.get('#high-level-repair').type('Heating or hot water repair')
        cy.get('body').click(0, 0);
        cy.wait(5000)
        /* cy.get('[data-testid=inputReason]').type('b')
         cy.wait(5000)
         cy.get('.suggestions > *').each(($el,index,$list) => {
             const prod1 = $el.text()
             const prodToSelect1 = 'Aids and adaptation installation'
 
             if(prod1 == prodToSelect1){
                 $el.trigger('click')
                 cy.wait(5000)
                 const continueButton2 = cy.get('.button-class').contains('Continue')
                 continueButton2.click()
                 cy.wait(5000)
             }
         })*/
         cy.get('[data-testid=alert-warning]').should('have.text','We’ve noticed that the source of your heating or hot water isn’t supplied from where you’ve told us the repair is, please go back to the previous page and change your selection.')
        cy.get('.button-class').contains('Continue').should('be.disabled')
        }

        unableToDetermineHeatingType() {
            cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
            cy.title().should('include', 'PeaBody Self Serve')
            cy.url().should('include', 'test')
            cy.get('.mt-1').type(data.blockCustomer)
            cy.get('.MuiFormLabel-root').should('have.text', 'Customer ID*')
            cy.get('.button-class').should('have.text', 'Continue')
            cy.get('.button-class').contains('Continue').click()
            cy.wait(5000)
          /*  cy.xpath('//h1[contains(text(),"What is your Repair Property?")]').should('have.text', 'What is your Repair Property?')
            cy.get(':nth-child(2) > .button-class').should('have.text', 'Continue ')
            const continueButton = cy.get('.button-class').contains('Continue')
            continueButton.click()
            cy.wait(5000)*/
            cy.get('h1').should('have.text', ' Where is the repair you want to report? ')
            cy.get(':nth-child(2) > .button-class').should('have.text', 'Continue ')
            const continueButton1 = cy.get('.button-class').contains('Continue')
            continueButton1.click()
            cy.wait(5000)
            cy.get('[data-testid=dropDownLocation]').select('External')
            cy.get('[data-testid=dropDownLocation]').should('have.value', '5')
            cy.get('#high-level-repair').type('Heating or hot water repair')
            cy.get('body').click(0, 0);
            cy.wait(5000)
            /* cy.get('[data-testid=inputReason]').type('b')
             cy.wait(5000)
             cy.get('.suggestions > *').each(($el,index,$list) => {
                 const prod1 = $el.text()
                 const prodToSelect1 = 'Aids and adaptation installation'
     
                 if(prod1 == prodToSelect1){
                     $el.trigger('click')
                     cy.wait(5000)
                     const continueButton2 = cy.get('.button-class').contains('Continue')
                     continueButton2.click()
                     cy.wait(5000)
                 }
             })*/
             cy.get('[data-testid=alert-warning]').should('have.text','Please continue to create your repair. We will need to review it and assign it to the correct contractor.')
            cy.get('.button-class').contains('Continue').should('be.enabled').click()
            cy.wait(5000)
            cy.get('h1').should('have.text', '  This repair is being raised as an emergency. Will someone over 18 be at home in the next four hours to let our contractor in? ')
            }
}
export default HeatingHotWaterCommunalPropertyDetermination_PO