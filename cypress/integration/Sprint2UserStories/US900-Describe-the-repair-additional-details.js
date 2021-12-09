/// <reference types="Cypress-xpath"/>

import Describetherepair_PO from "../../support/pageObjects/Describetherepair/Describetherepair_PO"
import PropertyLocation_PO from "../../support/pageObjects/DisplayandSelectrepairlocation/PropertyLocation_PO"

describe("Describe the repair (additional details)", () => {
    const describetherepair_PO = new Describetherepair_PO
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
        describetherepair_PO.visitHomepage()
        
    })

    it("Acceptance Criteria 1 - Input additional description ", () => {

        describetherepair_PO.inputAdditionalDescription()
    })

    it("Acceptance Criteria 2 - No input of additional description", () => {

        describetherepair_PO.noInputAdditionalDescription()
    })

    it("Acceptance Criteria 3 - Continue - mandatory information complete", () => {

        describetherepair_PO.continueMandatoryInfoComplete()
    })

    it("Acceptance Criteria 4 - Exit", () => {

        propertyLocation_PO.exitButton()
    })

    it("Acceptance Criteria 5 - Back", () => {

        propertyLocation_PO.backButton()
    })

    it("Acceptance Criteria 6 - Exit - Select return to my repair", () => {

        propertyLocation_PO.exitReturnToMyRepairButton()
    })

    it("Acceptance Criteria 7 - Exit - Select leave this page", () => {

        propertyLocation_PO.exitLeaveThisPageButton()
    })

    it("Acceptance Criteria 8 - Back - Select return to my repair", () => {

        propertyLocation_PO.backReturnToMyRepairButton()
    })

    it("Acceptance Criteria 9 - Back - Select go back", () => {

        propertyLocation_PO.backGoBackButton()
    })

})