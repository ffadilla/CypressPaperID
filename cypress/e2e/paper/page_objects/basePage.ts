import paperConfig from "../../utils/paperConfig";

export default class BasePage {
  baseUrl = paperConfig.paper.baseUrl;

  navigate(path: string) {
    cy.viewport(1920, 1080);
    cy.visit(this.baseUrl + path);
  }
}
