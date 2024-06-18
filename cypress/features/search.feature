Feature: search

As a user
I want to search for a topic
So that I can see the topic details

  Background:
    Given a user on IMDb page

  Scenario Outline: the user searches a existent topic
    When the user searches for "<topic>"
    Then the user is redirected to "<topic>" details

    Examples:

      | topic           |
      | ted             |
      | juego de tronos |
      | cannes          |

  Scenario Outline: the user searches a non existent topic
    When the user searches for "<topic>"
    Then the system shows a message

    Examples:

      | topic         |
      | fdjshahjklfds |
      | kjjxx         |

  Scenario: the user searches using a menu option
    When the user selects top 250 movies option
    Then the user can see the reults
