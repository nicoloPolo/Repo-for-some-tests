class LoginPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  fillUserName(userName) {
    cy.get("input#user-name").type(userName);
  }

  fillPassword(password) {
    cy.get("input#password").type(password);
  }

  clickLoginButton() {
    cy.get("div.login-box").within(() => {
      cy.get("#login-button").click();
    });
  }

  login(userName, password) {
    this.fillUserName(userName);
    this.fillPassword(password);
    this.clickLoginButton();
  }
}

export default LoginPage;
