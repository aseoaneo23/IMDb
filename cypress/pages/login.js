import { login_page, main_page } from "../constants";
const xpath = require('cypress-xpath')

class Login {

    properties = {
        getLoginBtn: () => cy.xpath(main_page.SIGN_IN_BTN),
        getImdbOption: () => cy.xpath(login_page.IMDB_LOGIN_OPTION),
        getEmailInput: () => cy.get(login_page.EMAIL_INPUT),
        getPasswordInput: () => cy.get(login_page.PASSWORD_INPUT),
        getSubmitBtn: () => cy.get(login_page.SUBMIT_BTN),
        getPostersRequest: main_page.LOAD_POSTERS_ENDPOINT,
        validEmail: Cypress.env('VALID_USER'),
        validPassword: Cypress.env('VALID_PASSWORD')
    }

    signIn = () => {
        this.properties.getLoginBtn().click()
        this.properties.getImdbOption().click()
        this.properties.getEmailInput().clear().type(this.properties.validEmail)
        this.properties.getPasswordInput().clear().type(this.properties.validPassword)
        this.properties.getSubmitBtn().click()
        cy.intercept(this.properties.getPostersRequest).as('getPosterRequest')
        cy.wait('@getPosterRequest',{timeout: 10000})
    }
}

module.exports = new Login() 