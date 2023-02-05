import { contactFormData } from "./data/testData";
import { bookmarkTab } from "./data/testData";
import { companyDropDownMenu } from "./data/testData";
import { legalConsent } from "./data/testData";
import { sendMessage } from "./data/testData";
import { selectCountry } from "./data/testData";
import { bookmarksNames } from "./data/testData";

describe("Mostly AI test challenge", () => {
  beforeEach(() => {
    cy.visit("https://mostly.ai/");
    cy.removeCookieConsentBanner();
    cy.viewport(1920, 1200)
  });

  it("verifies if following bookmarks are being visible – Platform, Synthetic data, Resources,Company", () => {
    bookmarksNames.forEach((el) => cy.contains(el).should("be.visible"));
  });

  it("verifies if the following information is displayed “Sorry, no results for: sythetic” ", () => {
    cy.search("sythetic");
    cy.verifySearchResults("Sorry, no results for:", "sythetic");
  });

  it("should fill contact form and hover over send message button", () => {
    cy.get(bookmarkTab)
      .contains("Company")
      .trigger("mouseover")
      .then(() => {
        cy.get(companyDropDownMenu).contains("Contact").click({ force: true });
      });

    cy.wait(10000);

    cy.removeCookieConsentBanner();
    contactFormData.forEach((field) => {
      cy.inputFormField(field.locator, field.value);
    });
    cy.selectValueFormField(selectCountry, "Germany");

    cy.get(legalConsent).check();
    cy.get(sendMessage).trigger("mouseover");
  });
});
