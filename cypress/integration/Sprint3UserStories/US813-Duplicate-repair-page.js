/// <reference types="Cypress-xpath"/>

import DuplicateRepairPage_PO from "../../support/pageObjects/DuplicateRepairPage/DuplicateRepairPage_PO"
import PropertyLocation_PO from "../../support/pageObjects/DisplayandSelectrepairlocation/PropertyLocation_PO"

describe("Duplicate repair page", () => {
    const duplicateRepairPage_PO = new DuplicateRepairPage_PO
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
        duplicateRepairPage_PO.visitHomepage()
        
    })

    it("Acceptance Criteria 1 - Potential duplicate(s) identified", () => {

        duplicateRepairPage_PO.potentialDuplicateIdentified()
    })

    it("Acceptance Criteria 2 - NO potential duplicate(s) identified", () => {

        duplicateRepairPage_PO.noPotentialDuplicateIdentified()
    })

    it("Acceptance Criteria 3 - Select a duplicate repair", () => {

        duplicateRepairPage_PO.selectADuplicateRepair()
    })

    it("Acceptance Criteria 4 - 'None of the above'", () => {

        duplicateRepairPage_PO.noneOfTheAbove()
     })

    it("Acceptance Criteria 5 - Exit", () => {

        propertyLocation_PO.exitButton()
    })

    it("Acceptance Criteria 6 - Back", () => {

        propertyLocation_PO.backButton()
    })

    it("Acceptance Criteria 7 - Exit - Select return to my repair", () => {

        propertyLocation_PO.exitReturnToMyRepairButton()
    })

    it("Acceptance Criteria 8 - Exit - Select leave this page", () => {

        propertyLocation_PO.exitLeaveThisPageButton()
    })

    it("Acceptance Criteria 9 - Back - Select return to my repair", () => {

        propertyLocation_PO.backReturnToMyRepairButton()
    })

    it("Acceptance Criteria 10 - Back - Select go back", () => {

        propertyLocation_PO.backGoBackButton()
    })

})