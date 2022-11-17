///<reference types="Cypress" />
describe(" nome do teste", () => {
  

// 1 . Ao menos um teste para cada operação disponível com inteiros (adição, substração, multiplicação, divisão)
// 2. Ao menos um teste para cada operação disponível com decimais
// 3. Ao menos um teste para a função de concatenação
// 4. Testar se os campos númericos aceitam caracteres alfa-numéricos (letras) para todas as operações e validar a mensagem de erro, se houver. Quando a operação é matemática, deve aceitar apenas números. Quando for concatenação deve aceitar letras.
// 4. Testar se o botão limpar apaga a resposta
// 5. Testar se a caixa "Integers only" fica escondida para a operação concatenação
// 6. Testar se a caixa "Integers only" formata o resultado sem letras e zeros à esquerda na resposta
  before(() => {
      cy.visit('https://myrandstad.randstad.com.br/#/curriculum')
  });

 

  it("teste login)", () => {
    cy.logins_randstad()
    
  })
});