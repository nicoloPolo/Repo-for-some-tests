import LoginPage from "../package.objects/Entering";

describe("Tests for Inventory page", () => {
  const loginPage = new LoginPage();
  const { username, password } = Cypress.env();

  it("Test cases for inventory", () => {
    loginPage.visit();
    loginPage.login(username, password);
    cy.url().should("include", "https://www.saucedemo.com/inventory.html");

    cy.get("div.bm-burger-button")
      .should("exist")
      .find("#react-burger-menu-btn")
      .should("be.visible");

    cy.get("div.shopping_cart_container")
      .should("exist")
      .find("a.shopping_cart_link")
      .should("be.visible");

    cy.get("span.select_container")
      .should("exist")
      .find("select.product_sort_container")
      .should("be.visible");

    cy.get("select.product_sort_container")
      .find("option")
      .should("have.length", 4)
      .then((options) => {
        expect(options[0]).to.have.text("Name (A to Z)");
        expect(options[1]).to.have.text("Name (Z to A)");
        expect(options[2]).to.have.text("Price (low to high)");
        expect(options[3]).to.have.text("Price (high to low)");
      });
  });
});
