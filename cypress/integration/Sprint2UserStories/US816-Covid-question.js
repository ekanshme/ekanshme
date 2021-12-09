/// <reference types="Cypress-xpath"/>

import DisplayCovidQues_PO from "../../support/pageObjects/DisplayCovidQuestion/DisplayCovidQues_PO"
import PropertyLocation_PO from "../../support/pageObjects/DisplayandSelectrepairlocation/PropertyLocation_PO"

describe("Covid question", () => {
    const displayCovidQues_PO = new DisplayCovidQues_PO
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
        displayCovidQues_PO.visitHomepage()
        
    })

    it("Acceptance Criteria 1 - Self-isolating question displayed", () => {

       displayCovidQues_PO.selfIsolatingQuesDisplayed()
    })

    it("Acceptance Criteria 2 - Self-isolating response - NO", () => {

        displayCovidQues_PO.selfIsolatingResponseNo()
    })

    it("Acceptance Criteria 3 - Self-isolating response - YES", () => {

        displayCovidQues_PO.selfIsolatingResponseYes()
    })

    it("Acceptance Criteria 4 - Self-isolating question is NOT ANSWERED", () => {

        displayCovidQues_PO.selfIsolatingQuesNotAnswered()
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