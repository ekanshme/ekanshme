/// <reference types="Cypress-xpath"/>

import HomePage_PO from "../../support/pageObjects/SelectRepairProperty-Multiple/Homepage_PO"

describe("Select repair property/tenancy - Multiple", () => {
    const homepage_PO = new HomePage_PO


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

    it("Acceptance Criteria 1 - Multiple current tenanciess", () => {

        homepage_PO.enterCustIDandContinue()
    })

    it("Acceptance Criteria 2 - Multiple current tenancies - Change repair property", () => {

        homepage_PO.changeRepairProperty()

    })

    it("Acceptance Criteria 3 - Continue", () => {

        homepage_PO.continueButton()

    })

    it("Acceptance Criteria 4 - Exit", () => {

        homepage_PO.exitButton()

    })

    it("Acceptance Criteria 5 - Back", () => {

        homepage_PO.backButton()

    })

    it("Acceptance Criteria 6 - Exit - Select return to my repair", () => {

        homepage_PO.exitReturnToMyRepairButton()

    })

    it("Acceptance Criteria 7 - Exit - Select leave this page", () => {

        homepage_PO.exitLeaveThisPageButton()

    })

    it("Acceptance Criteria 8 - Back - Select return to my repair", () => {

        homepage_PO.backReturnToMyRepairButton()

    })

    it("Acceptance Criteria 9 - Back - Select go back", () => {

        homepage_PO.backGoBackButton()

    })

})