// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('removeCookieConsentBanner', ()=> {
    cy.get('#BorlabsCookieBoxWrap').then(($el) => {
        $el.css('display', 'none')
    })
}) 

Cypress.Commands.add('verifyElementByText', (text) => {
    cy.contains(text).should("be.visible");

})

Cypress.Commands.add('inputFormField', (locator, value) => {
    cy.get(locator).type(value);

})
Cypress.Commands.add('selectValueFormField', (locator, value) => {
    cy.get(locator).select(value);

})

Cypress.Commands.add('search', (searchWord) => {
    const searchIcon =  cy.get('#open-header-search-1044-16-icon');
    const searchField = cy.get('input[type="search"]');
    searchIcon.click()
    searchField.type(searchWord).type('{enter}')

})

Cypress.Commands.add('verifySearchResults', (value1, value2) => {
    const result = cy.get('h1.ct-headline')
    const searchedValue = cy.get('h1.ct-code-block')
    result.contains(value1).should('be.visible')
    searchedValue.contains(value2).should('be.visible')

})