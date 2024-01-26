describe('Interacoes', () => {
  it('Digitar em um campo', () => {
    cy.visit('/').get('.logo > img')

    cy.get('.form-control').type('barbosaerick88@gmail.com(ender)')
  })

  it('Click', () => {
    cy.visit('/').get('#top_header')

    //click normal
    //cy.get('.fa-user')
    // .click()

    //click duplo
    // cy.get('.fa-user')
    //.dblclick()

    //click botao direito
    //cy.get('.fa-user')
    //.rightclick()

    //enter para simular click no botao
    cy.get('.form-control').type('barbosaerick88@gmail.com{enter}')
  })

  //selecionando objetos (dropdown)
  it('Select', () => {
    cy.visit('/').get('#top_header')

    cy.get('.footer_one_widget').contains('Checkout View Two').click()

    cy.get('#country').select('Ghana')
  })

  //.Check() e Uncheck()
  it.only('Checkbox e radio button', () => {
    cy.visit('/').get('#top_header')

    cy.get('.footer_one_widget').contains('Checkout View One').click()

    cy.get('#materialUnchecked').check().uncheck()
    // para radio button o uncheck() não funciona only for checkbox 
    cy.get('#css').check()


  })
})
