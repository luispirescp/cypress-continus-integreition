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


  it("teste", () => {
    cy.acessa_ate_menu_e_clicar_abrir_vaga();
    cy.get('[label="Perfil profissional"] input').click()
    cy.get('#options-wrapper ul li').then(($perfil)=>{                  
      const retorno  = dados_random($perfil)
      cy.get(`#options-wrapper ul li:nth-child(${retorno})`).click()
  })
  });
  const dados_random = (entra_dados) => {  
    const index_aleatorio = Math.floor(Math.random() * entra_dados.length);
    return index_aleatorio;
  };
  it.skip("Criar vaga com perfil GSO", () => {
    cy.acessa_ate_menu_e_clicar_abrir_vaga();
    cy.preenche_formulario_de_vaga("teste observacao");
    cy.adiciona_fornecedor_e_preposto("CWI");
    cy.get(locator.CADASTRA_VAGA.click_salvar).click();
    cy.intercept("POST", "/bff/vaga/").as("post_vaga");
    cy.get(locator.CADASTRA_VAGA.Modal_confirmacao.click_salvar).click();
    cy.wait("@post_vaga").then(({
      request,
      response
    }) => {
      expect(response.body.idAreaTribo).to.eq(request.body.idAreaTribo);
      expect(response.statusCode).to.eq(201);
      expect(response.body.idPerfil).to.eq(request.body.idPerfil);
      expect(response.body.idSenioridade).to.eq(request.body.idSenioridade);
      expect(response.body.idVaga).not.to.eq(null);
      expect(response.body.observacao).to.eq(request.body.observacao);
      expect(response.body.tecnologias).to.deep.eq(request.body.tecnologias);
      expect(response.body.tipoVaga).to.eq(request.body.tipoVaga);
    });
  });

  it("validar o preenchimento dos campos obrigatorios na tela abertura de vaga", () => {
    cy.acessa_ate_menu_e_clicar_abrir_vaga();
    cy.get(locator.CADASTRA_VAGA.click_botao_salvar).click();
    cy.get(locator.MODAL_ALERTA_CAMPOS_OBRIGATORIOS.botao_fecha_modal).click();
    cy.get(locator.CADASTRA_VAGA.botao_matriz_competencia).should(
      "not.be.enabled"
    );
    cy.get(locator.CAMPOS_GLOBAL.campo_expectativa_inico).should(
      "have.class",
      "error"
    );
    cy.get(locator.CAMPOS_GLOBAL.campo_area_tribo).should(
      "have.class",
      "error"
    );
    cy.get(locator.CAMPOS_GLOBAL.campo_tecnologia).should(
      "have.class",
      "error"
    );
    cy.get(locator.CAMPOS_GLOBAL.campo_time_squad).should(
      "have.class",
      "error"
    );
    cy.get(locator.CAMPOS_GLOBAL.campo_tipo_vaga).should("have.class", "error");
    cy.get(locator.CAMPOS_GLOBAL.campo_observacao).should(
      "have.class",
      "error"
    );
    cy.get(locator.CAMPOS_GLOBAL.campo_senioridade).should(
      "have.class",
      "error"
    );
    cy.get(locator.CAMPOS_GLOBAL.campo_profissional).should(
      "have.class",
      "error"
    );
  });

  it('teste', () => {

    cy.get(locator.MENU_LATERAL.botao_menu_abrir_vaga).should(
      "have.class",
      "green"
    ).click();

  })

  it("validar a funcionalidade do botão abrir vaga", () => {
    cy.get(locator.MENU_LATERAL.botao_menu_abrir_vaga).click();
  })

  it("validar carregamento dos campos droplist na Abrir vaga", () => {
    cy.intercept(
      "GET",
      `${Cypress.env("URL_BFF_VAGA_COM_ASTERISCOS_ABRIR")}`
    ).as("get_abrir_vaga");
    cy.get(locator.MENU_LATERAL.botao_menu_abrir_vaga).click();

    cy.wait("@get_abrir_vaga").then(({
      req,
      response
    }) => {
      expect(response.body.perfis).to.have.length(25);
      expect(response.body.areasTribos).to.have.length(37);
      expect(response.body.fornecedores).to.have.length(20);
      expect(response.body.senioridades).to.have.length(5);
      expect(response.body.tecnologias).to.have.length(41);
      expect(response.body.timesSquad).to.have.length(121);
      expect(response.body.tipoVaga).to.have.length(2);
    });
  });

  it("validar estado e comportamento de botões em tela abertuta de vaga", () => {
    cy.acessa_ate_menu_e_clicar_abrir_vaga();
    cy.get(locator.CADASTRA_VAGA.botao_matriz_competencia).should(
      "not.be.enabled"
    );
    cy.get(locator.CADASTRA_VAGA.botao_preview_avaliacao).should(
      "have.class",
      "s-btn"
    );
    cy.get(locator.CADASTRA_VAGA.clcik_para_adicionar_fornecedor).should(
      "have.class",
      "s-btn"
    );
    cy.get(locator.CADASTRA_VAGA.botao_salvar_e_abrir_nova).should(
      "have.class",
      "s-btn"
    );
    cy.get(locator.CADASTRA_VAGA.botao_limpar_formulario).should(
      "have.class",
      "s-btn"
    );
    cy.get(locator.CADASTRA_VAGA.botao_voltar)
      .should("have.class", "orange")
      .and("have.class", "medium");
  });
});