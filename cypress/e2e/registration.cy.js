describe("User can do registration successfully", () => {
  it("Interaction with registration page", () => {
    const namep = Cypress.env("username");
    const passwordp = Cypress.env("password");

    cy.login(namep, passwordp);

    cy.get("div.header_right.d-flex.align-items-center")
      .find(".btn.btn-outline-white.header_signin")
      .should("be.enabled")
      .click();

    cy.get("div.modal-footer.d-flex.justify-content-between")
      .find("button.btn.btn-link")
      .click();

    cy.get("input#signupName").should("be.visible").type("Nick");
    cy.get("input#signupLastName").should("be.visible").type("Osadchyi");
    cy.get("input#signupEmail").should("be.visible").type("Nicolo@mail.com");
    cy.get("input#signupPassword").should("be.visible").type("Pass123!");
    cy.get("input#signupRepeatPassword").should("be.visible").type("Pass123!");

    cy.get("input#signupPassword").should("have.value", "Pass123!");
    cy.get("input#signupRepeatPassword").should("have.value", "Pass123!");

    cy.get("div.modal-footer").find("button.btn.btn-primary").click();
  });
});
