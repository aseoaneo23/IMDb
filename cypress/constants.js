export const main_page = {
    REJECT_COOKIES : '[data-testid="reject-button"]',
    SIGN_IN_BTN: '//a[@class="ipc-btn ipc-btn--single-padding ipc-btn--center-align-content ipc-btn--default-height ipc-btn--core-baseAlt ipc-btn--theme-baseAlt ipc-btn--on-textPrimary ipc-text-button imdb-header__signin-text"][contains(.,"Sign In")]',
    SEARCH_INPUT: '#suggestion-search',
    TEXT_RESULTS: 'Buscar «topic»',
    PAGE_TITLE: '//h1[@class="sc-f2794aa0-0 dsbNrB"]',
    ERROR_SECTION: '[data-testid="results-section-empty-results-msg"]',
    NO_RESULTS_ERROR_MESSAGE: 'No se han encontrado resultados',
    MENU_OPTIONS: '#imdbHeader-navDrawerOpen',
    TOP_250_MOVIES: '//a[@role="menuitem"][contains(.,"Top 250 Movies")]',
    OPTION_SEARCH_H1_RESULT: '//h1[@class="ipc-title__text chart-layout-specific-title-text"][contains(.,"Las 250 mejores películas de IMDb")]',
    WATCHLIST_BTN: '[data-testid="poster-watchlist-ribbon-add"]',
    WATCHLIST_PAGE_BTN: '//a[contains(@class,"ipc-btn")]//span[text()="Lista de seguimiento"]',
    PROFILE_BTN:'//label[@aria-haspopup="true"][contains(.,"myke")]',
    MY_RATINGS_BTN: '//a[@role="menuitem"][contains(.,"Mis puntuaciones")]',
    LOAD_POSTERS_ENDPOINT: 'https://api.graphql.imdb.com/?operationName=UserRatingsAndWatchOptions&variables=%7B%22fetchOtherUserRating%22%3Afalse%2C%22idArray%22%3A%5B%22tt20215968%22%2C%22tt12037194%22%2C%22tt22022452%22%2C%22tt27470893%22%2C%22tt23289160%22%2C%22tt1684562%22%2C%22tt15239678%22%2C%22tt17279496%22%2C%22tt12637874%22%2C%22tt32258354%22%2C%22tt4919268%22%2C%22tt16283824%22%2C%22tt27995594%22%2C%22tt16426418%22%2C%22tt13649112%22%2C%22tt1392190%22%2C%22tt11389872%22%2C%22tt2788316%22%2C%22tt28681409%22%2C%22tt11198330%22%2C%22tt2096673%22%2C%22tt15398776%22%2C%22tt8740790%22%2C%22tt1160419%22%2C%22tt0903747%22%2C%22tt0816692%22%2C%22tt14230458%22%2C%22tt0944947%22%2C%22tt13016388%22%2C%22tt0468569%22%5D%2C%22includeUserRating%22%3Atrue%2C%22locale%22%3A%22es-ES%22%2C%22location%22%3A%7B%22latLong%22%3A%7B%22lat%22%3A%2240.41%22%2C%22long%22%3A%22-3.71%22%7D%7D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22sha256Hash%22%3A%229672397d6bf156302f8f61e7ede2750222bd2689e65e21cfedc5abd5ca0f4aea%22%2C%22version%22%3A1%7D%7D'
    }

export const login_page = {
    IMDB_LOGIN_OPTION: '//span[text()="Sign in with IMDb"]',
    EMAIL_INPUT: '#ap_email',
    PASSWORD_INPUT: '#ap_password',
    SUBMIT_BTN: '#signInSubmit',
}

export const watch_list = {
    DROP_CONTENT_BTN: '[data-testid="poster-watchlist-ribbon-remove"]',
    CONTENT_LIST: '//li[@class="ipc-metadata-list-summary-item"]'
}

export const ratings = {
    RATE_BTN: '//button[contains(@data-testid,"rate-button")]',
    FIVE_STARS_RATING_BTN: '[aria-label="Puntuar 5"]',
    FINISH_RATING: '//button[contains(.,"Puntuar")]',
    DELETE_RATING_BTN: '//button[contains(.,"Borrar puntuación")]',
    RATINGS_LIST_ITEM: '//div[contains(@data-testid,"list-page-mc-list-content")]',
}