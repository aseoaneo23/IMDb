import { main_page, ratings } from "../constants";
const xpath = require('cypress-xpath')

class MainPage {
    properties = {
        getRejectCookiesBtn: () => cy.get(main_page.REJECT_COOKIES,{timeout: 10000}),
        getSearchBar: () => cy.get(main_page.SEARCH_INPUT),
        getPageTitle: () => cy.xpath(main_page.PAGE_TITLE),
        getError: () => cy.get(main_page.ERROR_SECTION),
        getBurguerMenu: () => cy.get(main_page.MENU_OPTIONS),
        get250MoviesOption: () => cy.xpath(main_page.TOP_250_MOVIES),
        get250MoviesH1: () => cy.xpath(main_page.OPTION_SEARCH_H1_RESULT),
        getAddToWatchListBtn: () => cy.get(main_page.WATCHLIST_BTN).first(),
        getWatchlistPageBtn: () => cy.xpath(main_page.WATCHLIST_PAGE_BTN),
        getRateContentBtn: () => cy.xpath(ratings.RATE_BTN).first(),
        getStarsToRate: () => cy.get(ratings.FIVE_STARS_RATING_BTN),
        getMyProfileBtn: () => cy.xpath(main_page.PROFILE_BTN),
        getMyRatingsBtn: () => cy.xpath(main_page.MY_RATINGS_BTN),
        getFinishRatingBtn: () => cy.xpath(ratings.FINISH_RATING)
    }

    visitIMDb = () => {
        cy.visit('/')

        //this.properties.getRejectCookiesBtn().click()
    }

    searchTopic = topic => {
        this.properties.getSearchBar().clear().type(topic + '{enter}')
    }

    checkTopicDetails = topic => {
        this.properties.getPageTitle().should('have.text', main_page.TEXT_RESULTS.replace('topic', topic))
    }

    checkError = () => {
        this.properties.getError().should('contain.text', main_page.NO_RESULTS_ERROR_MESSAGE)
    }

    searchByMenu = () => {
        this.properties.getBurguerMenu().click()
        this.properties.get250MoviesOption().click()
    }

    checkMenuResult = () => this.properties.get250MoviesH1().should('be.visible')

    addToWatchlist = () => {
        this.properties.getAddToWatchListBtn().click()
        cy.wait(2500)
    }

    goToWatchlist = () => {
        this.properties.getWatchlistPageBtn().click()
        cy.title().should('eq', 'Mi lista')
    }

    checkLoginRedirect = () => cy.url().should('include', '/registration/signin')

    rateContent = () => {
        this.properties.getRateContentBtn().click()
        this.properties.getStarsToRate().click({ force: true })
        this.properties.getFinishRatingBtn().click()
    }

    goToMyRatings = () => {
        this.properties.getMyProfileBtn().click()
        this.properties.getMyRatingsBtn().click()
    }

}
module.exports = new MainPage()