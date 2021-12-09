/// <reference types="Cypress-xpath"/>

import HomePage_PO from "../../support/pageObjects/SelectRepairProperty-Multiple/Homepage_PO"
import PropertyTypeCheck_PO from "../../support/pageObjects/Determinepropertytypeeligibility/PropertyTypeCheck_PO"

describe("Determine property type eligibility", () => {
    const homepage_PO = new HomePage_PO
    const propertyTypeCheck_PO = new PropertyTypeCheck_PO

    before(function () {
        // cy.viewport(1550,2750)
        cy.fixture('example').then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(function () {
        cy.clearCookies()
        cy.clearLocalStorage()
        homepage_PO.visitHomepage()
        // cy.scrollTo('top')
    })

    it("Acceptance Criteria 1 - Passes property type check", () => {

        propertyTypeCheck_PO.enterCustIDandContinue()
    })

    it("Acceptance Criteria 2 - Continue", () => {

        homepage_PO.continueButton()

    })

    it("Acceptance Criteria 3 - Exit", () => {

        homepage_PO.exitButton()

    })

    it("Acceptance Criteria 4 - Back", () => {

        homepage_PO.backButton()

    })

    it("Acceptance Criteria 5 - Exit - Select return to my repair", () => {

        homepage_PO.exitReturnToMyRepairButton()

    })

    it("Acceptance Criteria 6 - Exit - Select leave this page", () => {

        homepage_PO.exitLeaveThisPageButton()

    })

    it("Acceptance Criteria 7 - Back - Select return to my repair", () => {

        homepage_PO.backReturnToMyRepairButton()

    })

    it("Acceptance Criteria 8 - Back - Select go back", () => {

        homepage_PO.backGoBackButton()

    })
})