/// <reference types="Cypress-xpath"/>

import HighLevelPolicyCheck_PO from "../../support/pageObjects/Selecthighlevelrepairdescription/HighLevelPolicyCheck_PO"
import PropertyLocation_PO from "../../support/pageObjects/DisplayandSelectrepairlocation/PropertyLocation_PO"

describe("Repair details confirmation page", () => {
    //const highLevelPolicyCheck_PO = new HighLevelPolicyCheck_PO
    const propertyLocation_PO = new PropertyLocation_PO

    before(function () {
        // cy.viewport(1550,2750)
        cy.fixture('example').then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(function () {
        cy.clearCookies()
        cy.clearLocalStorage()
       // highLevelPolicyCheck_PO.visitHomepage()
        
    })

    it("Acceptance Criteria 1 - Display Confirmation Page", () => {

       // highLevelPolicyCheck_PO.highLevelDescFound()
    })

    it("Acceptance Criteria 2 - Select to edit an item", () => {

        //highLevelPolicyCheck_PO.highLevelDescNotFound()
    })

    it("Acceptance Criteria 3 - Edit an item and don't make any changes", () => {

       // highLevelPolicyCheck_PO.highLevelDescReSelected()
    })

    it("Acceptance Criteria 4 - Edit an item and make changes", () => {

        // highLevelPolicyCheck_PO.highLevelDescReSelected()
     })

    it("Acceptance Criteria 5 - Exit", () => {

      //  propertyLocation_PO.exitButton()
    })

    it("Acceptance Criteria 6 - Continue", () => {

      //  propertyLocation_PO.backButton()
    })

    it("Acceptance Criteria 7 - Exit - Select return to my repair", () => {

      //  propertyLocation_PO.exitReturnToMyRepairButton()
    })

    it("Acceptance Criteria 8 - Exit - Select leave this page", () => {

     //   propertyLocation_PO.exitLeaveThisPageButton()
    })

})