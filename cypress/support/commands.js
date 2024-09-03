// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (namep, passwordp) => {
  cy.visit(`https://${namep}:${passwordp}@qauto.forstudy.space/`, {
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("fillLoginForm", () => {
  const email = Cypress.env("loginEmail");
  const password = Cypress.env("loginPassword");

  cy.get("button.header_signin").first().click();

  cy.get("input#signinEmail").type(email);
  cy.get("input#signinPassword").type(password);

  cy.get("div.modal-footer").within(() => {
    cy.get("button.btn-primary").click();
  });
});

Cypress.Commands.add(
  "typePassword",
  { prevSubject: "element" },
  (subject, password) => {
    cy.wrap(subject).type(password, { log: false });
  }
);
