describe("API Tests for Auth and subsequent requests", () => {
  const baseUrl = "https://qauto.forstudy.space/api";
  const signinEndpoint = "/auth/signin";
  const userEndpoints = {
    currentUser: "/user/current",
    carExpenses: "/expenses",
    carCreation: "/cars",
    carBrands: "/cars/brands",
    userCarList: "/cars",
  };
  const username = "guest";
  const password = "welcome2qauto";
  let sessionCookie;

  it("Login and save session cookie", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}${signinEndpoint}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
      body: {
        email: "Nicolo1@mail.com",
        password: "Pass123!",
        remember: false,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq("ok");

      cy.getCookie("sid").then((cookie) => {
        if (cookie) {
          sessionCookie = cookie.value;
          cy.log("Session cookie saved:", sessionCookie);
        } else {
          throw new Error("Session cookie not found");
        }
      });
    });
  });

  it("GET expenses test", () => {
    cy.setCookie("sid", sessionCookie);
    cy.request({
      method: "GET",
      url: `${baseUrl}${userEndpoints.carExpenses}`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("POST create new car", () => {
    cy.setCookie("sid", sessionCookie);
    cy.request({
      method: "POST",
      url: `${baseUrl}${userEndpoints.carCreation}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
      body: {
        carBrandId: 1,
        carModelId: 1,
        mileage: 122,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.status).to.eq("ok");
    });
  });

  it("GET cars test", () => {
    cy.setCookie("sid", sessionCookie);
    cy.request({
      method: "GET",
      url: `${baseUrl}${userEndpoints.carBrands}`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("GET user cars list test", () => {
    cy.setCookie("sid", sessionCookie);
    cy.request({
      method: "GET",
      url: `${baseUrl}${userEndpoints.userCarList}`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
    });
  });

  it("POST create all expense", () => {
    cy.setCookie("sid", sessionCookie);
    cy.request({
      method: "POST",
      url: `${baseUrl}${userEndpoints.carExpenses}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
      body: {
        carId: 194137,
        reportedAt: "2024-09-11",
        mileage: 150,
        liters: 11,
        totalCost: 11,
        forceMileage: false,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq("ok");
    });
  });
});
