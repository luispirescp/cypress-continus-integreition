///<reference types="Cypress" />
import locator from "../../../support/element-centralizer/locaitors-centralizador-campos";
import function_global from "../../../utilitys/functions-globais";

describe("Abertura de vaga", {
  retries: 2
}, () => {
 
  var verificador = 0;
  beforeEach(() => {
    function_global.verifica_se_usuario_esta_logado("rodrigo_cunha");
  });

  it('deleta vaga clicando em lixeira', () => {
    cy.get("tbody tr td")
      .first()
      .then(($td) => {
        const id_da_vaga = $td.text();
      })
    cy.get("tr .actions button").then(($detalhes_acito) => {
      $detalhes_acito.last().click();
    });
    cy.intercept('DELETE', `${Cypress.env('URL_BFF_VAGA_COM_ASTERISCOS_FINAL')}`).as('deleta_vaga')
    cy.get('.content-modal footer button').contains('Excluir vaga').click()
    cy.wait('@deleta_vaga').then(({
      req,
      response
    }) => {
      expect(response.statusCode).to.eq(204);
    })
  })
  it("valida fechamento de vaga e textos modal ", () => {
    cy.get(locator.LISTA_VAGAS_HOME.elemento_action_edicao).first().click()
    cy.get('[title="Fechar vaga"] button').click()

    cy.get('.modal-title > span').then(($text_confirm) => {
      expect($text_confirm.text()).to.eq(locator.TEXTO_MODAL_FECHAMENTO_VAGA.confirma);
    })
    cy.get('.modal-description > span').then(($text_descricao) => {
      expect($text_descricao.text()).to.eq(locator.TEXTO_MODAL_FECHAMENTO_VAGA.descricao);
    })
    cy.get('header > img').then(($imagem) => {
      expect($imagem).not.to.eq(null);
    });
    cy.intercept('POST', `${Cypress.env('URL_BFF_VAGA_COM_ASTERISCOS')}`).as('post_fechar_vaga')
    cy.get('.content-modal footer  .primary-button button').click()
    cy.wait('@post_fechar_vaga').then(({
      req,
      response
    }) => {
      expect(response.statusCode).to.eq(204);
    })
  });
});
