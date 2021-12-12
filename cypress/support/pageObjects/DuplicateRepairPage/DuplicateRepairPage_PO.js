///<reference types="Cypress-xpath"/>

class DuplicateRepairPage_PO {
    visitHomepage() {
        cy.visit(Cypress.env('SS_TestURL'), { failOnStatusCode: false })
        cy.viewport(1280, 720)
        //cy.visit(Cypress.env('SS_DevURL'), {failOnStatusCode: false})
        //cy.viewport(1280, 720)
    }

    potentialDuplicateIdentified() {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'Peabody Self Serve')
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
        cy.get('#high-level-repair').type('Pest control squirrels')
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
        cy.xpath('//input[@value="No, Please let me arrange an appointment"]').click()
        cy.get('.button-class').contains('Continue').click()
        cy.wait(5000)
        cy.get('#duprepair-label2').should('have.text',' It looks like similar repairs have been reported recently. Please check these before continuing with a new repair. ')
        cy.get('#duprepair-div3').should('have.text','If you continue to raise a new repair, then we will review this and contact you. ')
        /*cy.get('h1').should('have.text', ' Please provide as much information as possible about this repair')
        cy.get('#outlined-textarea').type('test text')
        cy.get('.button-class').contains('Continue').click()
        cy.wait(5000)
        cy.get('#vanQues-h1').should('have.text', 'Is the repair needed because of Vandalism?')
       */
    }

    noPotentialDuplicateIdentified() {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'Peabody Self Serve')
        cy.url().should('include', 'test')
        cy.get('.mt-1').type(data.socialSingleTenantCustomer)
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
        cy.get('#high-level-repair').type('External wall render broken or damaged')
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
        cy.xpath('//input[@value="No, Please let me arrange an appointment"]').click()
        cy.get('.button-class').contains('Continue').click()
        cy.wait(5000)
        cy.get('h1').should('have.text', ' Please provide as much information as possible about this repair')
        //cy.get('#outlined-textarea').type('test text')
        cy.get('.button-class').contains('Continue').click()
        cy.wait(5000)
        //cy.get('#vanQues-h1').should('have.text', 'Is the repair needed because of Vandalism?')
        cy.get('#repAddDet-div4').should('have.text','Please tell us as much about the repair as you can, this will help our contractor prepare for your appointment')
       
    }

    selectADuplicateRepair() {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'Peabody Self Serve')
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
        cy.get('#high-level-repair').type('Pest control squirrels')
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
        cy.xpath('//input[@value="No, Please let me arrange an appointment"]').click()
        cy.get('.button-class').contains('Continue').click()
        cy.wait(5000)
        cy.get('#duprepair-label2').should('have.text',' It looks like similar repairs have been reported recently. Please check these before continuing with a new repair. ')
        cy.get('#duprepair-div3').should('have.text','If you continue to raise a new repair, then we will review this and contact you. ')
        cy.get('#duprepair-lradio1').click()
        cy.get('.alert').should('have.text','You have selected an existing repair that looks like the one you are reporting now. Please exit this process and check your repair in the repair history.')
       
    }

    noneOfTheAbove() {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'Peabody Self Serve')
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
        cy.get('#high-level-repair').type('Pest control squirrels')
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
        cy.xpath('//input[@value="No, Please let me arrange an appointment"]').click()
        cy.get('.button-class').contains('Continue').click()
        cy.wait(5000)
        cy.get('#duprepair-label2').should('have.text',' It looks like similar repairs have been reported recently. Please check these before continuing with a new repair. ')
        cy.get('#duprepair-div3').should('have.text','If you continue to raise a new repair, then we will review this and contact you. ')
        cy.get('#duprepair-radio1').click()
        cy.get('.alert').should('have.text','Thanks for checking, please continue to create your repair. We will review this before issuing it to our contractor to make sure they are not already dealing with this repair.')
       
    }

    exitButton() {

        cy.get('.mt-1').type(data.multipleTenantCustomer)
        cy.get('.button-class').should('have.text', 'Continue')
        const continueButton = cy.get('.button-class').contains('Continue')
        continueButton.click()
        cy.wait(5000)
        cy.get('.question-font-size').should('have.text', 'What is your Repair Property?')
        cy.log('Text verified')
        cy.xpath('//*[text()="Exit"]').click()
        cy.get('.modalPopUpContainer > .question').should('have.text', 'Are you sure you want to leave this page, your changes will be lost?')
        cy.get('.modalButtonContainer > :nth-child(1) > .button-class').contains('Return to my repair')
        cy.get('.modalButtonContainer > :nth-child(1) > .button-class').should('have.text', 'Return to my repair')
        cy.get('.modalButtonContainer > :nth-child(2) > .button-class').contains('Leave this page')
        cy.get('.modalButtonContainer > :nth-child(2) > .button-class').should('have.text', 'Leave this page')
    }

    backButton() {

        cy.get('.mt-1').type(data.multipleTenantCustomer)
        cy.get('.button-class').should('have.text', 'Continue')
        const continueButton = cy.get('.button-class').contains('Continue')
        continueButton.click()
        cy.wait(5000)
        cy.get('.question-font-size').should('have.text', 'What is your Repair Property?')
        cy.log('Text verified')
        cy.get('.back-btn').click()
        cy.get('.modalPopUpContainer > .question').should('have.text', 'Are you sure you want to go back, your changes will be lost?')
        cy.get('.modalButtonContainer > :nth-child(1) > .button-class').contains('Return to my repair')
        cy.get('.modalButtonContainer > :nth-child(1) > .button-class').should('have.text', 'Return to my repair')
        cy.get('.modalButtonContainer > :nth-child(2) > .button-class').contains('Go Back')
        cy.get('.modalButtonContainer > :nth-child(2) > .button-class').should('have.text', 'Go Back')
    }

    exitReturnToMyRepairButton() {

        cy.get('.mt-1').type(data.multipleTenantCustomer)
        cy.get('.button-class').should('have.text', 'Continue')
        const continueButton = cy.get('.button-class').contains('Continue')
        continueButton.click()
        cy.wait(5000)
        cy.get('.question-font-size').should('have.text', 'What is your Repair Property?')
        cy.log('Text verified')
        cy.xpath('//*[text()="Exit"]').click()
        cy.get('.modalPopUpContainer > .question').should('have.text', 'Are you sure you want to leave this page, your changes will be lost?')
        cy.get('.modalButtonContainer > :nth-child(1) > .button-class').contains('Return to my repair')
        cy.get('.modalButtonContainer > :nth-child(1) > .button-class').should('have.text', 'Return to my repair')
        cy.get('.modalButtonContainer > :nth-child(1) > .button-class').click()
        cy.get('.question-font-size').should('have.text', 'What is your Repair Property?')
    }

    exitLeaveThisPageButton() {
        cy.get('.mt-1').type(data.multipleTenantCustomer)
        cy.get('.button-class').should('have.text', 'Continue')
        const continueButton = cy.get('.button-class').contains('Continue')
        continueButton.click()
        cy.wait(5000)
        cy.get('.question-font-size').should('have.text', 'What is your Repair Property?')
        cy.log('Text verified')
        cy.xpath('//*[text()="Exit"]').click()
        cy.get('.modalPopUpContainer > .question').should('have.text', 'Are you sure you want to leave this page, your changes will be lost?')
        cy.get('.modalButtonContainer > :nth-child(2) > .button-class').contains('Leave this page')
        cy.get('.modalButtonContainer > :nth-child(2) > .button-class').should('have.text', 'Leave this page')
        cy.get('.modalButtonContainer > :nth-child(2) > .button-class').click()
        cy.get('.MuiFormLabel-root').should('have.text', 'Customer ID*')

    }

    backReturnToMyRepairButton() {
        cy.get('.mt-1').type(data.multipleTenantCustomer)
        cy.get('.button-class').should('have.text', 'Continue')
        const continueButton = cy.get('.button-class').contains('Continue')
        continueButton.click()
        cy.wait(5000)
        cy.get('.question-font-size').should('have.text', 'What is your Repair Property?')
        cy.log('Text verified')
        cy.get('.back-btn').click()
        cy.get('.modalPopUpContainer > .question').should('have.text', 'Are you sure you want to go back, your changes will be lost?')
        cy.get('.modalButtonContainer > :nth-child(1) > .button-class').contains('Return to my repair')
        cy.get('.modalButtonContainer > :nth-child(1) > .button-class').should('have.text', 'Return to my repair')
        cy.get('.modalButtonContainer > :nth-child(1) > .button-class').click()
        cy.get('.question-font-size').should('have.text', 'What is your Repair Property?')

    }

    backGoBackButton() {

        cy.get('.mt-1').type(data.multipleTenantCustomer)
        cy.get('.button-class').should('have.text', 'Continue')
        const continueButton = cy.get('.button-class').contains('Continue')
        continueButton.click()
        cy.wait(5000)
        cy.get('.question-font-size').should('have.text', 'What is your Repair Property?')
        cy.log('Text verified')
        cy.get('.jss4').eq(0).should('be.checked')
        cy.log('Residential Property selected')
        cy.get('.jss4').eq(1).check()
        cy.log('Non Residential Property selected')
        cy.get('.jss4').eq(1).should('be.checked')
        cy.get('.back-btn').click()
        cy.get('.modalPopUpContainer > .question').should('have.text', 'Are you sure you want to go back, your changes will be lost?')
        cy.get('.modalButtonContainer > :nth-child(2) > .button-class').contains('Go Back')
        cy.get('.modalButtonContainer > :nth-child(2) > .button-class').should('have.text', 'Go Back')
        cy.get('.modalButtonContainer > :nth-child(2) > .button-class').dblclick()
        cy.get('.MuiFormLabel-root').should('have.text', 'Customer ID*')

    }
}
export default DuplicateRepairPage_PO