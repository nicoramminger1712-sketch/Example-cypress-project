/// <reference types="cypress" />

describe("Login test", () => {
  before("Open website", () => {
    cy.visit("https://parabank.parasoft.com/");
  });

  it("Type username and password and click log in button", () => {
    //cy.get("input[name='username']").type("example username 14239091038275");
    //cy.get("input[name='password']").type("example password 1203945713892756");
    cy.get("input[type='submit']").click();

    cy.get("p.error").should("have.text", "Please enter a username and password.",
    );
  });
});
