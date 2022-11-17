///<reference types="Cypress" />
import locator from "../../../support/element-centralizer/locaitors-centralizador-campos";
import function_global from "../../../utilitys/functions-globais";
 
describe("Abertura de vaga", { retries: 2 },() => {
 
  beforeEach(() => {
    function_global.verifica_se_usuario_esta_logado("rodrigo_cunha");
  });


  it("validar campos da tela Home", () => {
    cy.get(locator.CADASTRA_VAGA.VALORES_EM_TELA.titulo_sistema).should(
      "be.visible"
    );
    cy.get(locator.CADASTRA_VAGA.VALORES_EM_TELA.nome_usuario).should(
      "be.visible"
    );
    cy.get(locator.CADASTRA_VAGA.VALORES_EM_TELA.logo_do_sistema).should(
      "be.visible"
    );
  });
  });