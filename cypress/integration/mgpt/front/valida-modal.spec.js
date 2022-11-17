///<reference types="Cypress" />
import locator from "../../../support/element-centralizer/locaitors-centralizador-campos";
import function_global from "../../../utilitys/functions-globais";

describe("Abertura de vaga", {
  
  retries: 2
}, () => {
 
  beforeEach(() => {
    function_global.verifica_se_usuario_esta_logado("rodrigo_cunha");
  });

  it("validar a presença da modal prenecher todos os campos obrigatorios", () => {
    cy.acessa_ate_menu_e_clicar_abrir_vaga();
    cy.get(locator.CADASTRA_VAGA.click_botao_salvar)
      .should("have.class", "green")
      .click();
    cy.get(locator.MODAL_ALERTA_CAMPOS_OBRIGATORIOS.botao_fecha_modal)
      .should("have.class", "yellow")
      .click();
  });

  it("validar filtro pesquisa por requisitante", () => {
    var name_user = "";
    cy.get(locator.LISTA_VAGAS_HOME.label_nome_user_logado)
      .first()
      .then(($name_user) => {
        name_user = $name_user.text();
      });

    cy.intercept("GET", `${Cypress.env("URL_BFF_VAGA_COM_ASTERISCOS")}`).as(
      "ver"
    );
    cy.get(locator.LISTA_VAGAS_HOME.botao_pesquisar).click();
    cy.wait("@ver").then(({
      req,
      response
    }) => {
      expect(name_user).to.eq("Rodrigo Leal da Cunha");
    });
  });
});