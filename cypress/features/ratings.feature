Feature: manage ratings

As a user
I want to rate some content
So that I can see it in my ratings

Background: 
    Given a authenticated user on main page

Scenario: the user rates sucessfully
    When the user rates a content
    Then the rating should be visible on ratings page
    
Scenario: the user deletes a rating
    Given a user on ratings page
    When the user drops a rating
    Then the rating should dissapear