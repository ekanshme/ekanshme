/// <reference types="Cypress-xpath"/>

import HighLevelPolicyCheck_PO from "../../support/pageObjects/Selecthighlevelrepairdescription/HighLevelPolicyCheck_PO"
import PropertyLocation_PO from "../../support/pageObjects/DisplayandSelectrepairlocation/PropertyLocation_PO"

describe("Select high level repair description", () => {
    const highLevelPolicyCheck_PO = new HighLevelPolicyCheck_PO
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
        highLevelPolicyCheck_PO.visitHomepage()
        // cy.scrollTo('top')
    })

    it("Acceptance Criteria 1 - High level descriptions found", () => {

        highLevelPolicyCheck_PO.highLevelDescFound()
    })

    it("Acceptance Criteria 2 - High level descriptions not found", () => {

        highLevelPolicyCheck_PO.highLevelDescNotFound()
    })

    it("Acceptance Criteria 3 - High level description re-selected - try again", () => {

        highLevelPolicyCheck_PO.highLevelDescReSelected()
    })

    it("Acceptance Criteria 4 - Continue - mandatory information complete", () => {

        propertyLocation_PO.continueMandatoryInfoComplete()
    })

    it("Acceptance Criteria 5 - Continue - mandatory information NOT complete", () => {

        propertyLocation_PO.continueMandatoryInfoNotComplete()
    })

    it("Acceptance Criteria 6 - Exit", () => {

        propertyLocation_PO.exitButton()
    })

    it("Acceptance Criteria 7 - Back", () => {

        propertyLocation_PO.backButton()
    })

    it("Acceptance Criteria 8 - Exit - Select return to my repair", () => {

        propertyLocation_PO.exitReturnToMyRepairButton()
    })

    it("Acceptance Criteria 9 - Exit - Select leave this page", () => {

        propertyLocation_PO.exitLeaveThisPageButton()
    })

    it("Acceptance Criteria 10 - Back - Select return to my repair", () => {

        propertyLocation_PO.backReturnToMyRepairButton()
    })

    it("Acceptance Criteria 11 - Back - Select go back", () => {

        propertyLocation_PO.backGoBackButton()
    })

})