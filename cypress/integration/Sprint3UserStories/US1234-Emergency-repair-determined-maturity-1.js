/// <reference types="Cypress-xpath"/>

import EmergencyRepairDetermined_PO from "../../support/pageObjects/EmergencyRepairDetermined/EmergencyRepairDetermined_PO"
import PropertyLocation_PO from "../../support/pageObjects/DisplayandSelectrepairlocation/PropertyLocation_PO"

describe("Emergency repair determined - maturity 1", () => {
    const emergencyRepairDetermined_PO = new EmergencyRepairDetermined_PO
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
        emergencyRepairDetermined_PO.visitHomepage()
        
    })

    it("Acceptance Criteria 1 - Default emergency repair messaging", () => {

        emergencyRepairDetermined_PO.defaultEmergencyRepairMessaging()
    })

    it("Acceptance Criteria 2 - Select continue with emergency repair", () => {

        emergencyRepairDetermined_PO.selectContinueWithEmergencyRepair()
    })

    it("Acceptance Criteria 3 - Select continue with an appointment", () => {

        emergencyRepairDetermined_PO.selectContinueWithAppointment()
    })

    it("Acceptance Criteria 4 - Select to raise the repair later", () => {

        emergencyRepairDetermined_PO.selectToRaiseRepairLater()
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