/// <reference types="Cypress-xpath"/>

import DetermineSupplementaryRepairQues_PO from "../../support/pageObjects/DetermineSupplementaryRepairQues/DetermineSupplementaryRepairQues_PO"
import PropertyLocation_PO from "../../support/pageObjects/DisplayandSelectrepairlocation/PropertyLocation_PO"

describe("Determine supplementary repair questions", () => {
    const determineSupplementaryRepairQues_PO = new DetermineSupplementaryRepairQues_PO
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
        determineSupplementaryRepairQues_PO.visitHomepage()
        
    })

    it("Acceptance Criteria 1 - Additional question needed ", () => {

        determineSupplementaryRepairQues_PO.additionalQuesNeeded()
    })

    it("Acceptance Criteria 2 - Additional check Passed", () => {

        determineSupplementaryRepairQues_PO.additionalCheckPassed()
    })

    it("Acceptance Criteria 3 - Additional check Failed", () => {

        determineSupplementaryRepairQues_PO.additionalCheckFailed()
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