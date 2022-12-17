import BasePage from "./basePage";

export default class InvoicePage extends BasePage {
  path = "webappv1/#/invoicer/invoice";

  InvoiceCreateButton = "#digpayin-step1";
  InvoiceDropdownCustomer = '.ng-star-inserted > .ng-select > .ng-select-container > .ng-value-container';
  InvoiceOpenInventoryModal = "#btn_product_list_modal";
  InvoiceNumberField = "#mat-input-0";
  InvoiceProductNoTwo = '.p-datatable-tbody > :nth-child(4) > :nth-child(2)';
  InvoiceSaveButton = '.footer-body > .green-button';
  InvoiceQty = '.item > :nth-child(4)';
  InvoiceSimpanButton = "#digpayin-step5 > #single-button";
  InvoiceSimpanConfirmed = ':nth-child(2) > .dropdown-item';
  InvoiceOkay = '.col-md-12 > .paper-button';

  //Create Invoice Object
  
  clickInvoiceCreateButton() {
    cy.get(this.InvoiceCreateButton).click();
  }

  selectInvoiceDropdownCustomer() {
    cy.get(this.InvoiceDropdownCustomer).click();
  }

  clickInvoiceOpenInventoryModal() {
    cy.get(this.InvoiceOpenInventoryModal).click();
  }

  selectInvoiceProductNoTwo() {
    cy.get(this.InvoiceProductNoTwo).click();
  }

  typeInvoiceNumberField(random: string) {
    cy.get(this.InvoiceNumberField).clear().type(random);
  }

  clickInvoiceSaveButton() {
    cy.get(this.InvoiceSaveButton).click();
  }

  typeInvoiceQty(qty: string) {
    cy.get(this.InvoiceQty).click({force:true}).type(qty);
  }

  clickInvoiceSimpanButton() {
    cy.get(this.InvoiceSimpanButton).click();
  }

  clickInvoiceSimpanConfirmed() {
    cy.get(this.InvoiceSimpanConfirmed).click();
  }

  clickInvoiceOkay() {
    cy.get(this.InvoiceOkay).click();
  }

  //Invoice Details Object

  InvoiceSendStepOne = '[data-cy="send-invoice-sales"]';
  InvoiceSendtoCustomer = "#digpayin-step7";
  InvoiceYesSendButton = '.btn-cancel-form-data-mailgun';
  InvoiceReminderLater = '[data-cy="cancel"]';

  clickInvoiceSendtoCustomer() {
    cy.get(this.InvoiceSendStepOne).click();
    cy.get(this.InvoiceSendtoCustomer).click();
    cy.get(this.InvoiceYesSendButton).click();
  }

  clickInvoiceReminderLater() {
    cy.get(this.InvoiceReminderLater).click();
  }
}