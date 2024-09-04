import InventoryPage from "../package.objects/InventoryPage";
import LoginPage from "../package.objects/Entering";

describe("Inventory item click", () => {
  const inventoryPage = new InventoryPage();
  const loginPage = new LoginPage();
  const { username, password } = Cypress.env();

  it("should open the correct item page by name", () => {
    loginPage.visit();
    loginPage.login(username, password);
    cy.url().should("include", "https://www.saucedemo.com/inventory.html");

    inventoryPage.clickItemByName("Sauce Labs Backpack");

    cy.url().should(
      "include",
      "https://www.saucedemo.com/inventory-item.html?id=4"
    );
    cy.get("div.inventory_details_desc_container")
      .should("exist")
      .find("div.inventory_details_name.large_size")
      .should("have.text", "Sauce Labs Backpack");
  });

  it("should open the correct item page by index", () => {
    loginPage.visit();
    loginPage.login(username, password);
    cy.url().should("include", "https://www.saucedemo.com/inventory.html");
    inventoryPage.clickItemByIndex(1);
    cy.url().should(
      "include",
      "https://www.saucedemo.com/inventory-item.html?id=0"
    );
    cy.get("div.inventory_details_desc_container")
      .should("exist")
      .find("div.inventory_details_name.large_size")
      .should("have.text", "Sauce Labs Bike Light");
  });
});
