class InventoryPage {
  clickItemByName(itemName) {
    cy.get("div.inventory_item").contains(itemName).click();
  }

  clickItemByIndex(index) {
    cy.get("div.inventory_item")
      .eq(index)
      .find('a[data-test^="item-"]')
      .first()
      .click();
  }
}

export default InventoryPage;
