import { login_page, main_page } from "../constants";
const xpath = require('cypress-xpath')

class Login {

    properties = {
        getLoginBtn: () => cy.xpath(main_page.SIGN_IN_BTN),
        getImdbOption: () => cy.xpath(login_page.IMDB_LOGIN_OPTION),
        getEmailInput: () => cy.get(login_page.EMAIL_INPUT),
        getPasswordInput: () => cy.get(login_page.PASSWORD_INPUT),
        getSubmitBtn: () => cy.get(login_page.SUBMIT_BTN),
        validEmail: login_page.VALID_USER,
        validPassword: login_page.VALID_PASSWORD
    }

    signIn = () => {
        this.properties.getLoginBtn().click()
        this.properties.getImdbOption().click()
        this.properties.getEmailInput().clear().type(this.properties.validEmail)
        this.properties.getPasswordInput().clear().type(this.properties.validPassword)
        this.properties.getSubmitBtn().click()
        cy.wait(2500)
    }
}

module.exports = new Login() 