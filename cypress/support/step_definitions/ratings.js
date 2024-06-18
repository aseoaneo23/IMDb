import MainPage from '../../pages/main_page'
import Login from '../../pages/login'
import Ratings from '../../pages/ratings'

Given('a authenticated user on main page',()=>{
    MainPage.visitIMDb()
    Login.signIn()
})

Given('a user on ratings page', () => {
    MainPage.goToMyRatings()
})

When('the user rates a content', () => {
    MainPage.rateContent()
})

When('the user drops a rating', () => {
    Ratings.deleteRating()
})

Then('the rating should be visible on ratings page', () => {
    MainPage.goToMyRatings()
    Ratings.checkCreatedRating()
})

Then('the rating should dissapear', () => {
    Ratings.checkDeletedRating()
})

