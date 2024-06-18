import MainPage from '../../pages/main_page'


Given('a user on IMDb page', () => {
    MainPage.visitIMDb()
})

When('the user searches for {string}', topic => {
    MainPage.searchTopic(topic)
})

When('the user selects top 250 movies option', () => {
    MainPage.searchByMenu()
})

Then('the user is redirected to {string} details', topic => {
    MainPage.checkTopicDetails(topic)
})

Then('the system shows a message', () => {
    MainPage.checkError()
})

Then('the user can see the reults', () => {
    MainPage.checkMenuResult()
})



