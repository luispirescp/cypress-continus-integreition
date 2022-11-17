///<reference types="Cypress" />
import locator from "../../../support/element-centralizer/locaitors-centralizador-campos";
import function_global from "../../../utilitys/functions-globais";

describe("Abertura de vaga", { retries: 2 },() => {
  var verificador = 0;
  beforeEach(() => {
    function_global.verifica_se_usuario_esta_logado("rodrigo_cunha");
  });

  it("validar edição de vaga em andamento", () => {
    cy.acessa_ate_menu_e_clicar_selecao();
    cy.get(locator.MENU_LATERAL.botao_submenu).contains(" Validar ID ").click();
    cy.get(locator.VALIDA_ID.texto_valida_id_em_tela).then(($h1) => {
      expect($h1.text()).to.have.eq("Validar ID");
    });
    cy.get(locator.CAMPOS_GLOBAL.campo_id_da_vaga).type(99999999);
    cy.get(locator.CAMPOS_GLOBAL.botao_pesquisar).click();
    cy.get("div .vagaEmpty").should("be.visible");
  });
  
  it("validar textos na tela, campo e botão da tela Validar ID", () => {
    cy.acessa_ate_menu_e_clicar_selecao();
    cy.get(locator.MENU_LATERAL.botao_submenu_valida_id)
      .contains(" Validar ID ")
      .click();
    cy.get(locator.VALIDA_ID.texto_valida_id_em_tela).then(($h1) => {
      expect($h1.text()).to.have.eq("Validar ID");
    });
    cy.get(locator.VALIDA_ID.texto_em_tela).then(($span) => {
      expect($span.text()).to.have.eq("Vagas fechadas");
    });
    cy.get(locator.CAMPOS_GLOBAL.botao_pesquisar)
      .should("be.visible")
      .and("contain.text", "Pesquisar");
  });
  });