/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'
import home_page from '../support/pages/home_page'
import register_page from '../support/pages/register_page'

const email = faker.internet.email()
const nome = faker.person.fullName()
const emailInvalido = 'emailinvalido'
const senhaInvalida = '12345'
const senha = faker.internet.password()


// const screens = ['desktop', 'iphone-x', 'iphone-6']

//screens.forEach(element => {
    
    describe('Cadastro do usuario', () => {
      beforeEach('Acessando a pagina de cadastro', () => {

        //if(element != 'desktop') {
          //  cy.viewport(element)
        //}

        home_page.accessRegisterPage()
      })
    
      it('Validadar campo nome vazio', () => {
        register_page.saveRegister()
        cy.get('#errorMessageFirstName').should(
          'have.text',
          'O campo nome deve ser prenchido'
        )
        cy.get('#errorMessageFirstName').then((element) => {
          expect(element).be.visible
        })
      })
    
      it('Validadar campo e-mail vazio', () => {
        register_page.fillName(nome)
        register_page.saveRegister()
        cy.get('#errorMessageFirstName').should('be.visible')
        cy.get('#errorMessageFirstName').then((element) => {
          expect(element.text()).equal(
            'O campo e-mail deve ser prenchido corretamente'
          )
        })
      })
    
      it('Validadar campo e-mail invalido', () => {
        register_page.fillName(nome)
        register_page.fillEmail(emailInvalido)
        register_page.saveRegister()
        cy.get('#errorMessageFirstName').should('be.visible')
        cy.get('#errorMessageFirstName').then((element) => {
          expect(element.text()).equal(
            'O campo e-mail deve ser prenchido corretamente'
          )
        })
      })
    
      it('Validadar campo senha invalido', () => {
        register_page.fillName(nome)
        register_page.fillEmail(email)
        register_page.fillSenha(senhaInvalida)
        register_page.saveRegister()
        cy.get('#errorMessageFirstName').should('be.visible')
        cy.get('#errorMessageFirstName').then((element) => {
          expect(element.text()).equal(
            'O campo senha deve ter pelo menos 6 dígitos'
          )
        })
      })
    
      it('Cadastro realizado com sucesso', () => {
        cy.fillName(nome)
        cy.fillEmail(email)
        cy.fillSenha(senha)
        cy.saveRegister()
        cy.get('.swal2-popup').should('be.visible')
        cy.registerSucessfull('Cadastro realizado!').then((element) => {
          expect(element.text()).equal('Cadastro realizado!')
        })
        cy.get('#swal2-html-container').should('have.text', `Bem-vindo ${nome}`)
      })
    })
//});

