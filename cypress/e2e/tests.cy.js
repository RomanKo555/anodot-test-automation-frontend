
describe('Temperature Converter Tests', () => {
  // Error Guessing Test Cases
  it('verify 0 value', () => {
    cy.fixture("error_guessing").then((data) => {
        data.forEach((test_set) => {
          cy.visit('https://www.theonlineconverter.co.uk/temperature-converter/')
            cy.get("input[name='userInput']").type(test_set.input);
            cy.get("select[name='convertFrom']").select(test_set.from);
            cy.get("select[name='convertTo']").select(test_set.to);
            cy.get("input[name='Go']").click();
            const answer = '${test_set.input} ${test_set.from} = ${test_set.answer} ${test_set.to}'
            cy.get("#answer").find("p").should('have.text', test_set.input + " " + test_set.from + " = " + test_set.answer + " " + test_set.to);
        })
      })
    })
  })