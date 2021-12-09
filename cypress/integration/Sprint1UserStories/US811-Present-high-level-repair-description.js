/// <reference types="Cypress-xpath"/>

import PropertyLocation_PO from "../../support/pageObjects/DisplayandSelectrepairlocation/PropertyLocation_PO"

describe("Present high level repair description", () => {
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

    it("Acceptance Criteria 1 - High level description field displayed", () => {

        propertyLocation_PO.highLevelDescFieldDisplayed()
    })

    

})