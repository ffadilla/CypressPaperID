import { Given,When,And,Then } from "@badeball/cypress-cucumber-preprocessor";
import InvoicePage from "../page_objects/invoicePage";
import LoginPage from "../page_objects/loginPage";
import {generateInvoiceNumber} from "../step_definitions/utils";


const invoicePage = new InvoicePage();
const loginPage = new LoginPage();

let invoiceNumber = "";

beforeEach(() => {
    cy.window().then(win => win.sessionStorage.clear());
    cy.clearCookies();
    cy.clearLocalStorage();
    });

Given("user is on login page", () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    loginPage.navigate(loginPage.path);
  });

When("user input email address with {string}", (email: string) => {
    cy.get(loginPage.InputEmail).type(email);
    cy.get(loginPage.InputEmail).should("have.value", email);
  });
  
And("user clicks on lanjut button", () => {
    loginPage.clickLanjutkan();
  });
  
And("user input password with {string}", (password: string) => {
    cy.get(loginPage.InputPassword).type(password);
    cy.get(loginPage.InputPassword).should("have.value", password);
  });
  
And("user clicks on enter button", () => {
    loginPage.clickMasuk();
  });

And("user open create invoice page", () => {
    cy.wait(20000)
    cy.get('#aside > .sidebar > .ps > .ps-content > .scrollbar > .parent-dropdown > #sales_purchase_container > :nth-child(1) > .side-bar-title > span').click();
    cy.get(':nth-child(2) > .dropdown-item').click();
}); 

And("user click tambah invoice button", () => {
    invoicePage.clickInvoiceCreateButton();
    cy.url().should('include', 'invoicer/invoice/create')
});

And("user type random invoice number", () => {
    invoiceNumber = generateInvoiceNumber();
    invoicePage.typeInvoiceNumberField(invoiceNumber);
  });

And("user select customer on customer dropdown", () => {
    invoicePage.selectInvoiceDropdownCustomer();
    cy.contains('PPC').click()
});

And("user clicks on tambah produk button", () => {
    invoicePage.clickInvoiceOpenInventoryModal();
});

And("user select product on inventory modal and click simpan button", () => {
    invoicePage.selectInvoiceProductNoTwo();
    invoicePage.clickInvoiceSaveButton();
});

And("user type product qty {string}", (qty: string) => {
    cy.wait(760);
    invoicePage.typeInvoiceQty(qty);
  });

And("user click simpan button and select simpan konfirmasi", () => {
    invoicePage.clickInvoiceSimpanButton();
    invoicePage.clickInvoiceSimpanConfirmed();
    cy.wait(500);
    invoicePage.clickInvoiceOkay();
});


And("user get back to invoice list page", () => {
    cy.get('#aside > .sidebar > .ps > .ps-content > .scrollbar > .parent-dropdown > #sales_purchase_container > :nth-child(1) > .side-bar-title > span').click();
    cy.get(':nth-child(2) > .dropdown-item').click();
}); 

//Assertion

Then("invoice number and status is corrected", () => {
      cy.get('.paper-document-title').should(($title) => {
        expect($title).to.contain(invoiceNumber)
    });
    cy.get('.invoice-status-Unpaid').should(($title) => {
        expect($title).to.contain('Unpaid')
    });
});

Then("invoice number on invoice list is displayed", () => {
    cy.get('td').should(($title) => {
      expect($title).to.contain(invoiceNumber)
  });
});