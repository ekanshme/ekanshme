/// <reference types="Cypress-xpath"/>

import HeatingHotWaterCommunalPropertyDetermination_PO from "../../support/pageObjects/HeatingHotWaterCommunalPropertyDetermination/HeatingHotWaterCommunalPropertyDetermination_PO"
import PropertyLocation_PO from "../../support/pageObjects/DisplayandSelectrepairlocation/PropertyLocation_PO"

describe("Heating hot water communal/property determination", () => {
    const heatingHotWaterCommunalPropertyDetermination_PO = new HeatingHotWaterCommunalPropertyDetermination_PO
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
        heatingHotWaterCommunalPropertyDetermination_PO.visitHomepage()
        
    })

    it("Acceptance Criteria 1 - Heating and hot water repair - correct property hierarchy selected", () => {

        heatingHotWaterCommunalPropertyDetermination_PO.correctPropertyHierarchySelected()
    })

    it("Acceptance Criteria 2 - Heating and hot water repair - INCORRECT property hierarchy selected", () => {

        heatingHotWaterCommunalPropertyDetermination_PO.inCorrectPropertyHierarchySelected()
    })

    it("Acceptance Criteria 3 - Heating and hot water repair - unable to determine heating type", () => {

        heatingHotWaterCommunalPropertyDetermination_PO.unableToDetermineHeatingType()
    })

})