describe('Pruebas E2E de la Calculadora', () => {
  beforeEach(() => {
    // Abre la calculadora antes de cada prueba
    cy.visit('Calculadora.html');
  });

  afterEach(() => {
    // Captura automática del resultado de cada prueba
    cy.screenshot({ overwrite: true });
  });

  it('Suma: debe realizar 7 + 8 = 15', () => {
    cy.contains('button', '7').click();
    cy.contains('button', '+').click();
    cy.contains('button', '8').click();
    cy.contains('button', '=').click();

    cy.get('#current-operand').should('have.text', '15');
  });

  it('Resta: debe realizar 9 - 4 = 5', () => {
    cy.contains('button', '9').click();
    cy.contains('button', '-').click();
    cy.contains('button', '4').click();
    cy.contains('button', '=').click();

    cy.get('#current-operand').should('have.text', '5');
  });

  it('Multiplicación: debe realizar 6 × 7 = 42', () => {
    cy.contains('button', '6').click();
    cy.contains('button', '×').click();
    cy.contains('button', '7').click();
    cy.contains('button', '=').click();

    cy.get('#current-operand').should('have.text', '42');
  });

  it('Multiplicación de dos dígitos: debe realizar 5 × 5 = 25', () => {
    cy.contains('button', '5').click();
    cy.contains('button', '×').click();
    cy.contains('button', '5').click();
    cy.contains('button', '=').click();

    cy.get('#current-operand').should('have.text', '25');
  });

  it('División: debe realizar 8 ÷ 2 = 4', () => {
    cy.contains('button', '8').click();
    cy.contains('button', '÷').click();
    cy.contains('button', '2').click();
    cy.contains('button', '=').click();

    cy.get('#current-operand').should('have.text', '4');
  });

  it('Borrar un dígito: 123 con DEL debe quedar 12', () => {
    cy.contains('button', '1').click();
    cy.contains('button', '2').click();
    cy.contains('button', '3').click();
    cy.contains('button', 'DEL').click();

    cy.get('#current-operand').should('have.text', '12');
  });
});
