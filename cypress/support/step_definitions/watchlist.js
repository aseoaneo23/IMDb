import MainPage from '../../pages/main_page'
import Login from '../../pages/login'
import WatchList from '../../pages/watchlist'

Given('a user on IMDb page',()=>{
    MainPage.visitIMDb()
})

Given('an authenticated user', () => {
    Login.signIn()
})

Given('an user with content on watchlist', () => {
    MainPage.goToWatchlist()
    WatchList.checkContent()
})

When('the user add some content to watch list from main page', () => {
    MainPage.addToWatchlist()
})

When('the user drop some content from watchlist page', () => {
    WatchList.dropFromWatchlist()
})

When('the user tries to add some content from watchlist page', () => {
    MainPage.addToWatchlist()
})

Then('the content appears on watch list', () => {
    MainPage.goToWatchlist()
    WatchList.checkContent()
})

Then('the content should disappear', () => {
    WatchList.checkDroppedContent()
})

Then('the login popup is displayed', () => {
    MainPage.checkLoginRedirect()
})