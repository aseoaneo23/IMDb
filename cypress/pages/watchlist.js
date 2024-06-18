import { watch_list } from "../constants";

class WatchList {
    properties = {
        getDropPosterBtn: () => cy.get(watch_list.DROP_CONTENT_BTN).first(),
        getWatchlist: () => cy.xpath(watch_list.CONTENT_LIST),

    }

    checkContent = () => {
        this.properties.getWatchlist().children().should('have.length', 1)
    }

    dropFromWatchlist = () => {
        this.properties.getDropPosterBtn().click()
        cy.wait(2500)
    }
    
    checkDroppedContent = () => {
        cy.reload()
        this.properties.getWatchlist().should('not.exist')
    }
}

module.exports = new WatchList()