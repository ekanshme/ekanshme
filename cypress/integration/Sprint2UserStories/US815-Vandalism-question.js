/// <reference types="Cypress-xpath"/>

import DisplayVandalismQues_PO from "../../support/pageObjects/DisplayVandalismQuestion/DisplayVandalismQues_PO"
import PropertyLocation_PO from "../../support/pageObjects/DisplayandSelectrepairlocation/PropertyLocation_PO"

describe("Vandalism question", () => {
    const displayVandalismQues_PO = new DisplayVandalismQues_PO
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
        displayVandalismQues_PO.visitHomepage()
        
    })

    it("Acceptance Criteria 1 - Display vandalism question", () => {

       displayVandalismQues_PO.displayVandalismQuesion()
    })

    it("Acceptance Criteria 2 - Repair confirmed as vandalism", () => {

        displayVandalismQues_PO.repairConfirmedAsVandalism()
    })

    it("Acceptance Criteria 3 - Repair not as vandalism", () => {

        displayVandalismQues_PO.repairNotAsVandalism()
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