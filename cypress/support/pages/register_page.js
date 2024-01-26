///<reference types="cypress"/>

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

export default {
    //Métodos
saveRegister() {
    cy.get(elements.buttons.register).click()
},

fillEmail(email)  {
    cy.get(elements.fields.email).click()
    .type(email).should('not.be.null')

},
fillName(nome){
    cy.get(elements.fields.name).click()
    .type(nome).should('not.be.null')

},

fillSenha(senha){
    cy.get(elements.fields.password).click()
    .type(senha).should('not.be.null')
},

checkMessage(message){
    cy.get(elements.messages.error).should('have.text',message)
    
},
registerSucessfull(message){
    cy.get(elements.messages.successTitle).should('have.text',message)
    
}
  }
  
  