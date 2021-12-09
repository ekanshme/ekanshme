/// <reference types="Cypress-xpath"/>

import EnterOrConfirmContactInfo_PO from "../../support/pageObjects/EnterOrConfirmContactInformation/EnterOrConfirmContactInfo_PO"
import PropertyLocation_PO from "../../support/pageObjects/DisplayandSelectrepairlocation/PropertyLocation_PO"

describe("Enter or Confirm contact informations", () => {
    const enterOrConfirmContactInfo_PO = new EnterOrConfirmContactInfo_PO
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
        enterOrConfirmContactInfo_PO.visitHomepage()
        
    })

    it("Acceptance Criteria 1 - Display contact numbers - numbers available", () => {

        enterOrConfirmContactInfo_PO.displayContactNumbersAvailable()
    })

    it.only("Acceptance Criteria 2 - Display contact numbers - no numbers available", () => {

        enterOrConfirmContactInfo_PO.displayContactNumbersNoNumbersAvailable()
    })

    it("Acceptance Criteria 3 - Select from known contact numbers", () => {

        enterOrConfirmContactInfo_PO.selectFromKnownContactNumbers()
    })

    it("Acceptance Criteria 4 - Another contact number is entered", () => {

        enterOrConfirmContactInfo_PO.anotherContactNumberIsEntered()
     })

     it("Acceptance Criteria 5 - Contact number validation -  successful", () => {

        enterOrConfirmContactInfo_PO.contactNumberValidationSuccessful()
     })

     it("Acceptance Criteria 6 - Contact number validation - unsuccessful", () => {

        enterOrConfirmContactInfo_PO.contactNumberValidationUnsuccessful()
     })

     it("Acceptance Criteria 7 - NO contact number is selected", () => {

        enterOrConfirmContactInfo_PO.noContactNumberIsSelected()
     })

    it("Acceptance Criteria 8 - Exit", () => {

        propertyLocation_PO.exitButton()
    })

    it("Acceptance Criteria 9 - Back", () => {

        propertyLocation_PO.backButton()
    })

    it("Acceptance Criteria 10 - Exit - Select return to my repair", () => {

        propertyLocation_PO.exitReturnToMyRepairButton()
    })

    it("Acceptance Criteria 11 - Exit - Select leave this page", () => {

        propertyLocation_PO.exitLeaveThisPageButton()
    })

    it("Acceptance Criteria 12 - Back - Select return to my repair", () => {

        propertyLocation_PO.backReturnToMyRepairButton()
    })

    it("Acceptance Criteria 13 - Back - Select go back", () => {

        propertyLocation_PO.backGoBackButton()
    })

})