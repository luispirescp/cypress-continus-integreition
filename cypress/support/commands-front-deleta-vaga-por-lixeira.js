//const locaitors = require("../integration/utilitys/locaitors-centralizador-campos")
import locaitor from "./element-centralizer/locaitors-centralizador-campos";
const senha = "teste123";
const senha_errada = "teste12345";

Cypress.Commands.add("deleta_por_lixeira", () => {
 
  cy.get('tbody tr td #s-delete-wrapper').first().click()
  cy.get(locaitor.DELETA_VAGA.imagem_modal_presente).should('be.visible')
  cy.get(locaitor.DELETA_VAGA.botao_voltar).contains('Voltar')
  cy.get(locaitor.DELETA_VAGA.texto_titulo_modal).contains(locaitor.TEXTO_MODAL.confirma)
  cy.get(locaitor.CAMPOS_GLOBAL.modal_deleta_vaga).contains(locaitor.TEXTO_MODAL.descricao)
  cy.intercept('DELETE', '/bff/vaga/**').as('deletaVaga')
  cy.get('.content-modal .primary-button').should('be.visible').click()
  cy.wait('@deletaVaga').then(({req, response})=>{
    expect(response.statusCode).to.eq(204);
  })
})
