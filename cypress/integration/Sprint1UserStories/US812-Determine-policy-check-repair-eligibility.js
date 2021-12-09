/// <reference types="Cypress-xpath"/>

import RepairPolicyCheck_PO from "../../support/pageObjects/Determinepolicycheckrepaireligibility/RepairPolicyCheck_PO"

describe("Determine policy check repair eligibility", () => {
    const repairPolicyCheck_PO = new RepairPolicyCheck_PO

    before(function () {
        // cy.viewport(1550,2750)
        cy.fixture('example').then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(function () {
        cy.clearCookies()
        cy.clearLocalStorage()
        repairPolicyCheck_PO.visitHomepage()
        // cy.scrollTo('top')
    })

    it("Acceptance Criteria 1 - Passes repair policy check", () => {

        repairPolicyCheck_PO.passRepairPolicyCheck()
    })

    it("Acceptance Criteria 2 - Fails repairs policy check", () => {

        repairPolicyCheck_PO.failsRepairPolicyCheck()
    })
    

})