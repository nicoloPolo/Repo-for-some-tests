describe("Some tests for login page", () => {
  before(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Testing validations and other", () => {
    cy.get("div.login-box")
      .find("#login-button")
      .click()
      .then(() => {
        cy.get("div.error-message-container.error").should("be.visible");
      });
    cy.get("input#user-name")
      .type("standard_user")
      .then(() => {
        cy.get("div.error-message-container")
          .find("button.error-button")
          .should("exist")
          .click();
      });
    cy.get("input#password")
      .type("something")
      .then(() => {
        cy.get("div.login-box").find("#login-button").click();
        cy.get("div.error-message-container.error").should("be.visible");
      });
    cy.get("input#user-name")
      .clear()
      .then(() => {
        cy.get("div.login-box").find("#login-button").click();
        cy.get("div.error-message-container.error").should("be.visible");
      });
    cy.get("input#user-name")
      .clear()
      .then(() => {
        cy.get("div.login-box").find("#login-button").click();
        cy.get("div.error-message-container.error").should("be.visible");
        cy.get("div.error-message-container")
          .find("button.error-button")
          .should("exist")
          .click();
      });
  });
});
