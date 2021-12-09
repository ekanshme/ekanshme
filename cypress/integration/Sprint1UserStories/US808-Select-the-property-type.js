/// <reference types="Cypress-xpath"/>

import PropertyType_PO from "../../support/pageObjects/Select-the-property-type/PropertyType_PO"

describe("Select the property type (property, divided block, block, estate)", () => {
    const propertyType_PO = new PropertyType_PO

    before(function () {
        // cy.viewport(1550,2750)
        cy.fixture('example').then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(function () {
        cy.clearCookies()
        cy.clearLocalStorage()
        propertyType_PO.selectPropertyType()
    })

    it("Acceptance Criteria 1 - Property types available for selection within hierarchy", () => {

        propertyType_PO.enterCustIDandContinue()
    })

    it("Acceptance Criteria 2 - Property types available for selection within hierarchy - Change repair hierarchy", () => {

        propertyType_PO.changePropertyHierarchy()
    })

    

})