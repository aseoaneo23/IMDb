Feature: Manage watch List

As a user
I want to manage media (movies, series) to watch list
So that I can see them later

Background:
    Given a user on IMDb page

Scenario: add content from main page
    Given an authenticated user
    When the user add some content to watch list from main page
    Then the content appears on watch list

Scenario: drop media from watch list
    Given an authenticated user
    And an user with content on watchlist
    When the user drop some content from watchlist page
    Then the content should disappear

Scenario: unsuccessfull add beacuse no authentication
    When the user tries to add some content from watchlist page
    Then the login popup is displayed