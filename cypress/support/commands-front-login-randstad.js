import locator from "./element-centralizer/locaitors-centralizador-campos";
import dados_vaga from "../fixtures/dados-da-vaga"
import dados_random from "../utilitys/functions-globais"
const xpath = require("cypress-xpath");

Cypress.Commands.add("acessa_ate_menu_e_clicar_abrir_vaga", () => {
  cy.get(locator.CADASTRA_VAGA.click_abertura_de_vaga)
    .contains(" Abrir vaga ")
    .click();
});

Cypress.Commands.add("acessa_ate_menu_e_clicar_selecao", () => {
  cy.get(locator.CADASTRA_VAGA.click_abertura_de_vaga)
    .contains("Seleção")
    .click();
});

Cypress.Commands.add(
  "logins_randstad",
  () => {    
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('#mat-input-0').type('luis.pires.ext@randstad.com.br')
    cy.get('#mat-input-1').type('teste123Lm')
    cy.get('.mat-raised-button').click()
    
  })
    
    cy.get(locator.CADASTRA_VAGA.clcik_senioridade).click();
    cy.get('[label="Senioridade"] div p-dropdownitem:nth-child(1) li').click()   
    cy.get(locator.CADASTRA_VAGA.click_tecnologia).click();    
    cy.get('[label="Tecnologias"] div ul li').then(($tecno)=>{           
      const retorno  = dados_random.dados_random($tecno)
      cy.get(`[label="Tecnologias"] div ul li:nth-child(${retorno})`).click()  
  })
  cy.get(locator.CADASTRA_VAGA.click_body_da_tela).click();
  cy.get('[label="Área/Tribo"] input').click()
  cy.get('[label="Área/Tribo"] div ul li').then(($area)=>{                  
    const retorno  = dados_random.dados_random($area)
    cy.get(`[label="Área/Tribo"] div ul li:nth-child(${retorno})`).click()
})

    cy.get(locator.CADASTRA_VAGA.click_body_da_tela).click();
    
    cy.get('[label="Time/Squad"] div ul li').then(($area)=>{                  
      const retorno  = dados_random.dados_random($area)
      cy.get(`[label="Time/Squad"] div ul li:nth-child(${retorno})`).click()
  })

    // [label="Time/Squad"] div ul li:nth-child(1)

    cy.get(locator.CADASTRA_VAGA.preenche_time_squad).type(dados_vaga.time_squad);
    cy.get(locator.CADASTRA_VAGA.clcik_tipo_vaga).click();
    cy.get(locator.CADASTRA_VAGA.seleciona_tipo_nova).click();
    cy.get(locator.CADASTRA_VAGA.preenche_observacao).type(observacao);
  }
);

Cypress.Commands.add(
  "adiciona_fornecedor_e_preposto",
  (fornecedor, preposto) => {
    cy.get(locator.CADASTRA_VAGA.clcik_para_adicionar_fornecedor).click();

    cy.xpath(`//td[text()='${fornecedor}'] /..//label`).click();
    cy.xpath(`(//td[text()='${fornecedor}'] /..//input)[2]`).click();
    cy.xpath(`((//td[text()='${fornecedor}'] /..//input)[2]/../..//ul/li)[2]`).click()
    
      
     
    cy.get(locator.CADASTRA_VAGA.adicionado_fornecedor_a_vaga).click();
  }
);


