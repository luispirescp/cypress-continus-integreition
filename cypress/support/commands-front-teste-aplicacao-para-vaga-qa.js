

Cypress.Commands.add('comando_calculadora', () =>{
    cy.get('#selectBuild').select('4')
    cy.get('#number1Field').type(2);
    cy.get('#number2Field').type(2);
    cy.get('#selectBuild').select('ADD')
    cy.get('#calculateButton').click();    
    cy.get('#numberAnswerField').should('have.value',4);
})
