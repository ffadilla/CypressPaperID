import paperConfig from "../../../e2e/utils/paperConfig";

export function retrieveInvoiceNumber() {
  cy.request({
    method: "GET",
    url: paperConfig.paper.baseApiUrl + "v1/invoicer/sales-invoices/number",
  }).then((resp) => {
    let result = resp.body.data.invoice;
    cy.wrap(result).as("invoiceNumber");
  });
}

export function generateRandomNumber() {
  let random = Math.floor(100000000 + Math.random() * 900000000);
  return "8" + random + "";
}

export function generateInvoiceNumber() {
  let random = Math.floor(100000000 + Math.random() * 900000000);
  return "INV-5" + random + "";
}

export function generateCurrentDateOTP() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  return mm + dd;
}

export function generateRandomString(length: number) {
  let result = "";
  let characters = "abcdefghijklmnopqrstuvwxyz";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function convertOrdinalToCardinalNumber(input: any) {
  input = input.substring(0, input.length - 2);
  input = parseInt(input) - 1;

  return input.toString();
}

export function numberWithSeparators(input: any) {
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


export const convertNameToId = (name?: string): string => {
  return (
    name
      ?.trim()
      .toLowerCase()
      .replace(/[ '()]/g, "_") || ""
  );
};
