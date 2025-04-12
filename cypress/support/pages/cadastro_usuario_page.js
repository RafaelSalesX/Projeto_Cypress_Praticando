/// <reference types="cypress" /> 
const user_data = require('../../fixtures/data.json');
const user_data_invalid = require('../../fixtures/data_invalid.json')

export default{
    preencheNome(name){
        cy.get('#user')
        .type(name)
    },

    preencheEmail(mail){
        cy.get('#email')
        .type(mail)
    },

    preencheSenha(pass){
        cy.get('#password')
        .type(pass)
    },

    clicarCadastrar(){
        cy.get('#btnRegister')
        .click()
    },

    validarMensagemEsperada(nome){
        cy.get('.swal2-popup')
        .should('be.visible')
        .should('contain.text', `Bem-vindo ${nome}`);

        cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', 'Cadastro realizado!')
    },

    validarMensagemErro(mensagem){
        cy.get('#errorMessageFirstName')
        .should('contain.text', mensagem);
    }
    
}