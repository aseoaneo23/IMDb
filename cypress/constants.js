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
    MY_RATINGS_BTN: '//a[@role="menuitem"][contains(.,"Mis puntuaciones")]'
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