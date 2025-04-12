/// <reference types="cypress" /> 
import { faker } from '@faker-js/faker';
import commum_page from '../support/pages/commum_page'
import cadastro_page from '../support/pages/cadastro_usuario_page';

describe('Cadastro de usuário', () => {
    beforeEach('Acessar página de cadastro', () => {
        commum_page.acessarCadastroUsuario()
    });

    it('Campo nome vazio', () => {
    cadastro_page.preencheEmail(faker.internet.email())
    cadastro_page.preencheSenha(faker.internet.password())
    cadastro_page.clicarCadastrar()
    cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')
    });

    it('Campo email vazio', () => {
    cadastro_page.preencheNome(faker.person.fullName())
    cadastro_page.preencheSenha(faker.internet.password())
    cadastro_page.clicarCadastrar()
    cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')   
    });

    it('Campo email inválido', () => {
    cadastro_page.preencheNome(faker.person.fullName())
    cadastro_page.preencheEmail(faker.number.int())
    cadastro_page.preencheSenha(faker.internet.password())
    cadastro_page.clicarCadastrar()
    cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')   
    });

    it('Campo senha vazio', () => {
    cadastro_page.preencheNome(faker.person.fullName())
    cadastro_page.preencheEmail(faker.internet.email())
    cadastro_page.clicarCadastrar()
    cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Campo senha incorreto', () => {
    cadastro_page.preencheNome(faker.person.fullName())
    cadastro_page.preencheEmail(faker.internet.email())
    cadastro_page.preencheSenha(faker.string.alphanumeric(5));
    cadastro_page.clicarCadastrar()
    cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Cadastro com sucesso', async () => {    //async para mandar o código rodar um passo após o outro
        const name = await faker.person.fullName()  //await necessário para aguardar e armazenar o nome na variavel 
        
    cadastro_page.preencheNome(faker.person.fullName(name))
    cadastro_page.preencheEmail(faker.internet.email())
    cadastro_page.preencheSenha(faker.internet.password())
    cadastro_page.clicarCadastrar()
    cadastro_page.validarMensagemEsperada(name)
    });

});