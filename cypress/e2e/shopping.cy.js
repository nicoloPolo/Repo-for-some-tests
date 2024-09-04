import LoginPage from "../package.objects/Entering";
import AddingItem from "../package.objects/AddingItem";

describe("Login + adding an item", () => {
  const loginPage = new LoginPage();
  const { username, password } = Cypress.env();

  it("Test about login to the website", () => {
    loginPage.visit();
    loginPage.login(username, password);
    cy.url().should("include", "https://www.saucedemo.com/inventory.html");

    const addingItem1 = new AddingItem();
    addingItem1.addingItem();
  });
});
