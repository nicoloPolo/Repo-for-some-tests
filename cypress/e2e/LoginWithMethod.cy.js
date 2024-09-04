import LoginPage from "../package.objects/Entering";

describe("Login Test Case", () => {
  const loginPage = new LoginPage();
  const { username, password } = Cypress.env();

  it("Test about login to the website", () => {
    loginPage.visit();
    loginPage.login(username, password);

    cy.url().should("include", "https://www.saucedemo.com/inventory.html");
  });
});
