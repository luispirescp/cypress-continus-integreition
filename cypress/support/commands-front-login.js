import locator  from "./element-centralizer/locaitors-centralizador-campos"
const senha_errada = "teste12345";

Cypress.Commands.add("login", (usuario) => {
  login(usuario, Cypress.env("senha"));
});

Cypress.Commands.add("login_api", (usuario) => {
  cy.get(locator.LOGIN.campoLogin).type(usuario);
  cy.get(locator.LOGIN.campoPassword).type(Cypress.env("senha"));
  cy.get(locator.LOGIN.btnLogin).click()

});

Cypress.Commands.add("login_com_falha", (usuario) => {
  login(usuario, senha_errada);
});

const login = (usuario, senha) => {
  cy.get(locator.LOGIN.campoLogin).type(usuario);
  cy.get(locator.LOGIN.campoPassword).type(senha);
  cy.get(locator.LOGIN.btnLogin).click();
};
