///<reference types="cypress" />

// Elementos

const elements = {
    buttons: {
        register: '#btnRegister'
    },
    fields:{
        name: '#user',
        email: '#email',
        password: '#password',
    },
    messages: {
        error: '.errorLabel',
        successTitle: '#swal2-title'
        
    }
}

//Métodos
Cypress.Commands.add('saveRegister', () => {
    cy.get(elements.buttons.register).click()
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get(elements.fields.email).click()
    .type(email).should('not.be.null')

})
Cypress.Commands.add('fillName', (nome) => {
    cy.get(elements.fields.name).click()
    .type(nome).should('not.be.null')

})

Cypress.Commands.add('fillSenha', (senha) => {
    cy.get(elements.fields.password).click()
    .type(senha).should('not.be.null')

})

Cypress.Commands.add('checkMessage', (message) => {
    cy.get(elements.messages.error).should('have.text',message)
    
})
Cypress.Commands.add('registerSucessfull', (message) => {
    cy.get(elements.messages.successTitle).should('have.text',message)
    
})

