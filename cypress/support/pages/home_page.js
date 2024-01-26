///<reference types="cypress"/>

export default {
  accessRegisterPage() {
    cy.visit('/').get('.fa-lock').click()
    cy.get('#user').should('be.visible')
  },
}
