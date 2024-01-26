describe('Get Text', () => {
  it('Obter texto de um elemento', () => {
    // get() - selecionar elementos
    cy.visit('/').get('.logo > img')

    cy.get('.top_header_left > p').then((element) => {
      console.log(element.text())
      element.hide()
    })
    
  })
})
