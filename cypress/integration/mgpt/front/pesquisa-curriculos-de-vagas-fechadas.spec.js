///<reference types="Cypress" />
import locator from "../../../support/element-centralizer/locaitors-centralizador-campos";
import function_global from "../../../utilitys/functions-globais"

describe("pesquisar curriculos", () => {
  
  beforeEach(() => {
    function_global.verifica_se_usuario_esta_logado("rodrigo_cunha")   
  });

  it('pesquisar curriculos de vagas fechadas', ()=>{
    cy.get('sicredi-tab-bar div button').contains('fechadas').click();
    cy.get('thead tr span').contains('fechada em').should('be.visible')
  })

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
    cy.wait("@ver").then(({ req, response }) => {
      expect(name_user).to.eq("Rodrigo Leal da Cunha");
    });
  });

  it("validar pesquisa valida ID de vagas fechadas", () => {
    var vaga_fechada;
    cy.request({
      method: "GET",
      url: Cypress.env("URL_GET_VAGAS_FECHADAS"),
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("id_token")}`,
      },
    }).then((response) => {
      console.log(response.body.results[0].id);
      vaga_fechada = response.body.results[0].id;
      cy.acessa_ate_menu_e_clicar_selecao();
      cy.get(locator.MENU_LATERAL.botao_submenu)
        .contains(" Validar ID ")
        .click();
    });
    cy.get(locator.VALIDA_ID.texto_valida_id_em_tela).then(($h1) => {
      cy.get(locator.CAMPOS_GLOBAL.campo_id_da_vaga).type(vaga_fechada);
      cy.get(locator.LISTA_VAGAS_HOME.botao_pesquisar).click();
      cy.get(locator.VALIDA_ID.botao_valida_id)
        .should("have.class", "green")
        .and("have.class", "medium");
    });
  });
  
  it("validar filtro tipo de vaga tipo Reposicao", () => {
    cy.get(locator.LISTA_VAGAS_HOME.campo_tipo_de_vaga).click();
    cy.get(locator.LISTA_VAGAS_HOME.click_na_opcao_reposicao).click();
    cy.intercept("GET", `${Cypress.env("URL_BFF_VAGA_COM_ASTERISCOS")}`).as(
      "valida_vaga_tipo_reposicao"
    );
    cy.get(locator.LISTA_VAGAS_HOME.click_no_botao_pesquisar).click();
    cy.wait("@valida_vaga_tipo_reposicao").then(({ req, response }) => {
      expect(response.body.parameters.tipoVaga).to.eq("REPOSICAO");
    });
  });

  it("validar filtro tipo de vaga tipo nova", () => {
    cy.get(locator.LISTA_VAGAS_HOME.campo_tipo_de_vaga).click();
    cy.get(locator.LISTA_VAGAS_HOME.click_nas_opcoes).contains("Nova").click();
    cy.intercept("GET", `${Cypress.env("URL_BFF_VAGA_COM_ASTERISCOS")}`).as(
      "valida_vaga_tipo_nova"
    );
    cy.get(locator.LISTA_VAGAS_HOME.click_no_botao_pesquisar).click();
    cy.wait("@valida_vaga_tipo_nova").then(({ req, response }) => {
      expect(response.body.parameters.tipoVaga).to.eq("NOVA");
    });
  });


  it("validar filtro ao pesquisar por primeiro id de vaga na lista de vaga", () => {
    cy.get(locator.LISTA_VAGAS_HOME.campo_id_da_tabela)
      .first()
      .then(($td) => {
        const id_da_vaga = $td.text();
        cy.get(locator.LISTA_VAGAS_HOME.campo_input_id).type(id_da_vaga);
        cy.intercept("GET", `${Cypress.env("URL_BFF_VAGA_COM_ASTERISCOS")}`).as(
          "get_id_vaga"
        );
        cy.get(locator.LISTA_VAGAS_HOME.botao_pesquisar).click();
        cy.wait("@get_id_vaga").then(({ req, response }) => {
          expect(response.body.parameters.idVaga).to.eq(parseInt(id_da_vaga));
          expect(response.body.pagination.sort.direction).to.eq("ASC");
          expect(response.body.pagination.size).to.eq(10);
          expect(response.body.results[0].id).to.eq(parseInt(id_da_vaga));
        });
        cy.intercept("GET", `${Cypress.env("URL_BFF_VAGA")}${id_da_vaga}`).as(
          "valida_editar_vaga"
        );
        cy.get(locator.LISTA_VAGAS_HOME.icone_edita_vaga)
          .contains("Editar vaga")
          .click();
        cy.wait("@valida_editar_vaga").then(({ req, response }) => {
          expect(response.body.vaga.idVaga).to.eq(parseInt(id_da_vaga));
          function_global.verifica_campos_com_fundo_cinza();
        });
      });
  });


  it('pesquisar curriculos de vagas fechadas', ()=>{
    cy.get('sicredi-tab-bar div button').contains('fechadas').click();
    cy.get('thead tr span').contains('fechada em').should('be.visible')
    cy.get('thead tr .expectativaInicio ').should('not.exist')
    cy.get('tbody tr:nth-child(1) td:nth-child(9) sicredi-delete-action button').click()
    cy.get('#destruct-modal-wrapper .content-modal')
    .contains('Confirmar exclusão da vaga')
    .should('be.visible')
    cy.get('#destruct-modal-wrapper .content-modal')
    .contains(locator.MODAL_DELETA_VAGA.texto_descricao_modal)
    .should('be.visible')
    cy.get('#destruct-modal-wrapper .content-modal button')
    .then(($button)=>{
      expect($button).to.have.length(2)
    })
    cy.get('sicredi-button-secondary:nth-child(1) button')
    .then(($button)=>{
      expect($button.text()).to.have.eq('Voltar')
    })

    cy.get('.content-modal sicredi-button-primary button')
    .then(($button)=>{
      expect($button.text()).to.have.eq('Excluir vaga')      
    })
    cy.get('sicredi-button-secondary:nth-child(1) button').click()    
  })

  it('pesquisar que vagas fechadas os curriculos devem estra ou selecionados ou desclassificados', ()=>{   
    cy.get('sicredi-tab-bar div button').contains('fechadas').click();
    cy.get('thead tr span').contains('fechada em').should('be.visible')
    cy.get('tbody tr:nth-child(1) td:nth-child(9) sicredi-view-action button').click();    
    cy.get('app-filtro-curriculos label').then(($status_curriculos)=>{
      const status_curriculos =  $status_curriculos[3] 
      console.log(status_curriculos);      
    })
  
  })
})