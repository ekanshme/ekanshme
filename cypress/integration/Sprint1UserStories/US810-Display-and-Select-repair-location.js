/// <reference types="Cypress-xpath"/>

import PropertyLocation_PO from "../../support/pageObjects/DisplayandSelectrepairlocation/PropertyLocation_PO"

describe("Display and Select repair location", () => {
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
        propertyLocation_PO.visitHomepage()
        // cy.scrollTo('top')
    })

    it("Acceptance Criteria 1 - Select property location", () => {

        propertyLocation_PO.selectPropLocation()
    })

    it("Acceptance Criteria 2 - Continue - mandatory information complete", () => {

        propertyLocation_PO.continueMandatoryInfoComplete()

    })

    it("Acceptance Criteria 3 - Continue - mandatory information NOT complete", () => {

        propertyLocation_PO.continueMandatoryInfoNotComplete()

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