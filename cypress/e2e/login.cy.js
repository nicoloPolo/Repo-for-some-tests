import LoginPage from "../package.objects/loginPage";

describe("Login with Authentication", () => {
  const loginPage = new LoginPage();
  const { loginEmail, loginPassword } = Cypress.env();

  it("Login with creds", () => {
    loginPage.visit();

    loginPage.login(loginEmail, loginPassword);
  });
});
