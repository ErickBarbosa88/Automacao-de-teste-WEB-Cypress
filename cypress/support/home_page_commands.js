///<reference types="cypress"/>
Cypress.Commands.add('accessRegisterPage', () => {
    cy.visit('/').get('.fa-lock').click()
    cy.get('#user').should('be.visible')
})
