describe('Get Elements', () => {
  it('Econtrar/Selecionar elementos', () => {
    // get() - selecionar elementos
    cy.visit('/').get('.logo > img')

    //contains()
    cy.get('#top_header').as('cabecalho').contains('Login')

    //find() para encontrar elemendos
    cy.get('#top_header').find('.fa-user')

    //as()-alias
    cy.get('@cabecalho').find('.fa-user')
  })
})
