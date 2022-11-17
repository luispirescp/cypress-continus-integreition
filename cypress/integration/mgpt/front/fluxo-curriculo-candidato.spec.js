///<reference types="Cypress" />
import { first } from "cheerio/lib/api/traversing";
import locator from "../../../support/element-centralizer/locaitors-centralizador-campos";
import function_global from "../../../utilitys/functions-globais";

 
describe("Fluxo de curriculos em andamento",() => {

  beforeEach(() => {
    function_global.verifica_se_usuario_esta_logado("rodrigo_cunha");
  });

  it('Validar presença dos textos em destaque na tela',()=>{
    cy.acessa_ate_menu_e_clicar_selecao();    
    cy.intercept('GET', "**/bff/curriculo/**").as('get_curriculos')
    cy.get('sicredi-menu-child').contains('Currículos enviados').click()
      cy.wait('@get_curriculos').then(($response)=>{
      cy.get('h1').contains('Currículos enviados').should('be.visible')
      cy.get('header span ').contains('Pesquisar currículos').should('be.visible')
      cy.get('sicredi-h2').contains('Resultado da pesquisa').should('be.visible')
    })
   
  })

  
  it('Validar presença dos 5 campos na tela ',()=>{
    cy.acessa_ate_menu_e_clicar_selecao();    
    cy.intercept('GET', "**/bff/curriculo/**").as('get_curriculos')
    cy.get('sicredi-menu-child').contains('Currículos enviados').click()
    cy.wait('@get_curriculos').then(($response)=>{
      cy.get('h1').contains('Currículos enviados').should('be.visible')
      cy.get('[label="Área/Tribo"] label ').should('be.visible')
      cy.get('p-dropdown label ').contains('Vagas abertas por mim').should('be.visible')
      cy.get('[label="Tipo de vaga"]').contains('Todas').should('be.visible')
      cy.get('[label="Fornecedor"]').contains('Todos').should('be.visible')
      cy.get('[label="Status"]').contains('Em andamento').should('be.visible')
    })  
  })

  it.skip('Validar contador de curriculos',()=>{
    cy.acessa_ate_menu_e_clicar_selecao();
    cy.intercept('GET', "**/bff/curriculo/**").as('get_curriculos')
    cy.get('sicredi-menu-child').contains('Currículos enviados').click()        
    cy.wait('@get_curriculos').then(({req, response})=>{
      let quantidade_curriculos = response.body.results
      if(quantidade_curriculos.length > 9){
      }     
    })
  })
  });
  