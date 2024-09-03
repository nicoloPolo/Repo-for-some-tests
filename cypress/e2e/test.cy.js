describe("Checking elements on page", () => {
  const username = Cypress.env("username");
  const password = Cypress.env("password");
  before(() => {
    cy.visit(`https://${username}:${password}@qauto.forstudy.space/`, {
      failOnStatusCode: false,
    });
  });

  it("Find and test elements on the page", () => {
    cy.get("button.hero-descriptor_btn.btn.btn-primary", {
      timeout: 2000,
    }).should("be.visible");
    cy.get("div.contacts_socials.socials")
      .find("span.socials_icon.icon.icon-facebook")
      .should("be.visible");
    cy.get("div.contacts_socials.socials")
      .find("span.socials_icon.icon.icon-telegram")
      .should("be.visible");
    cy.get("div.contacts_socials.socials")
      .find("span.socials_icon.icon.icon-youtube")
      .should("be.visible");
    cy.get("div.contacts_socials.socials")
      .find("span.socials_icon.icon.icon-instagram")
      .should("be.visible");
    cy.get("div.contacts_socials.socials")
      .find("span.socials_icon.icon.icon-linkedin")
      .should("be.visible");
    cy.get(
      "div.col-md-6.d-flex.flex-column.align-items-center.align-items-md-end.justify-content-md-end.mb-2.mt-3.mt-md-0"
    )
      .find("a.contacts_link.display-4")
      .should("be.visible");
    cy.get(
      "div.col-md-6.d-flex.flex-column.align-items-center.align-items-md-end.justify-content-md-end.mb-2.mt-3.mt-md-0"
    )
      .find("a.contacts_link.h4")
      .should("be.visible");
  });
});
