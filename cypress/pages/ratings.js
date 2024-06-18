import { ratings } from "../constants"

class Rating{

    properties = {
        getRateContentBtn: () => cy.xpath(ratings.RATE_BTN).first(),
        getDeleteRatingBtn: () => cy.xpath(ratings.DELETE_RATING_BTN),
        getRatingListItem: () => cy.xpath(ratings.RATINGS_LIST_ITEM)
    }

    deleteRating = () =>{
        this.properties.getRateContentBtn().click()
        this.properties.getDeleteRatingBtn().click()
        cy.reload()
    }

    checkCreatedRating = () => this.properties.getRatingListItem().should('exist')

    checkDeletedRating = () => this.properties.getRatingListItem().should('not.exist')
}

module.exports = new Rating()