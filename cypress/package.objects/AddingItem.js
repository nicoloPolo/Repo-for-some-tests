class AddingItem {
  addingItem() {
    cy.get("div.pricebar")
      .should("exist")
      .first()
      .within(() => {
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get("#remove-sauce-labs-backpack").should("be.visible").click();
        cy.wait(2000);
      });
  }
}

export default AddingItem;
