import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/loginPage";

const loginPage = new LoginPage();

Given("user is on log in page", () => {
  loginPage.navigate(loginPage.path);
});

When("user fills email address input with {string}", (email: string) => {
  cy.get(loginPage.InputEmail).type(email);
  cy.get(loginPage.InputEmail).should("have.value", email);
});

When("user clicks on selanjutnya button", () => {
  loginPage.clickLanjutkan();
});

When("user fills password input with {string}", (password: string) => {
  cy.get(loginPage.InputPassword).type(password);
  cy.get(loginPage.InputPassword).should("have.value", password);
});

When("user clicks on masuk button", () => {
  loginPage.clickMasuk();
});

// assertions

Then("check url link is corrected", () => {
  cy.wait(15000)
  cy.url().should('include', 'invoicer/dashboard')
});
