import locator from "../support/element-centralizer/locaitors-centralizador-campos"

class Funtions_Global {
  
  Funtions_Global(){
  }

  verifica_se_usuario_esta_logado(user) {  
    cy.visit(Cypress.env('BASE_URL_DEV'))
    .then(()=>{
      cy.wait(3000)
      cy.get("body").then(($resp) => {
        if ($resp.hasClass("login-page")) { 
          cy.login_api(user)
        }
      });
    })
  }

  click(caminho) {
    cy.get(caminho).click();
  }
   acessa_click_valida(caminho) {
    cy.get(caminho).should("be.visible").click();
  }


      verifica_campos_obrigatorios(caminho){
      caminho.should("have.class", "error");
    };

     verifica_campos_com_fundo_cinza() {
      cy.get('[label="Perfil profissional"] .background').should("be.visible");
      cy.get('[label="ID vaga"] .background').should("be.visible");
      cy.get('[label="Requisitante"] .background').should("be.visible");
      cy.get('[label="Fornecedor"] .background').first().should("be.visible");
      cy.get('[label="Nota do Ranking"] .background')
        .first()
        .should("be.visible");
    }

    dados_random(entra_dados){
      const index_aleatorio = Math.floor(Math.random() * entra_dados.length);
      return index_aleatorio;
    };
  
}

exports.default = new Funtions_Global();
