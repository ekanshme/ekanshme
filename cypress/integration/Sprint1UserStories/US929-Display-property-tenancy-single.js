/// <reference types="Cypress-xpath"/>

import SingleCurrentTenancies_PO from "../../support/pageObjects/Displayproperty-tenancy-single/SingleCurrentTenancies_PO"

describe("Display property/tenancy - single", () => {
    const singleCurrentTenancies_PO = new SingleCurrentTenancies_PO

    before(function () {
        // cy.viewport(1550,2750)
        cy.fixture('example').then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(function () {
        cy.clearCookies()
        cy.clearLocalStorage()
        singleCurrentTenancies_PO.visitHomepage()
        // cy.scrollTo('top')
    })

    it("Acceptance Criteria 1 - Single current tenancies", () => {

        singleCurrentTenancies_PO.enterCustIDandContinue()
    })

})