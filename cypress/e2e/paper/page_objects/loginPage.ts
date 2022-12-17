import BasePage from "./basePage";

export default class LoginPage extends BasePage {
  path = "webappv1/#/login";
  
  InputEmail = '[data-cy="identifier"]';
  ButtonLanjutkan = '[data-cy="submit"]';
  InputPassword = '[data-cy="password"]';
  ButtonMasuk = 'form.ng-untouched > [data-cy="submit"]';
  
  loginKandidat(email: string, password: string) {
    cy.get(this.InputEmail).type(email);
    cy.get(this.ButtonLanjutkan).click();
    cy.get(this.InputPassword).type(password);
    cy.get(this.ButtonMasuk).click();
  }

  clickLanjutkan() {
    cy.get(this.ButtonLanjutkan).click();
  }

  clickMasuk() {
    cy.get(this.ButtonMasuk).click();
  }
}