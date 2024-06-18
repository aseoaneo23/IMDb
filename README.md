![Static Badge](https://img.shields.io/badge/IMDB-%20orange)
 ![Badge en Desarollo](https://img.shields.io/badge/STATUS-FINISHED-green) 
 ![Static Badge](https://img.shields.io/badge/NPM-v10.2.1-lightblue) 
 ![Static Badge](https://img.shields.io/badge/Node-v18.18-lightgreen)
 ![Static Badge](https://img.shields.io/badge/Cypress-v13.8.1-purple)
![Static Badge](https://img.shields.io/badge/Cucumber-v4.3.1-darkgreen)


# ℹ️ IMDb Automation 🎥

This is a repository to share my IMDb Automation. It contains a web automation with most important features in a learning scope.

# Index

- [Description](#description-)
- [Status](#status)
- [Folder Structure](#folder-structure)
- [Project access](#project-access)
- [Requirements](#requirements)
- [Installation and execution](#installation-and-execution)
- [FAQs](#faqs)

## Description 📖
Automation of IMDb, based on most important features like search content, add to watch list or rate a contetnt.

Page Object model is used in spite of what Cypress site says, it increases readability of code and is much easier to manage.

### Features 

The fact that these specific functionalities have been automated is the product of an exhaustive study of the application.

The conclusion of this study is that the functions of lists, search and ratings are the utilities that are most used on the website.

It should be noted that this regression plan is focused on a learning level, so we did not want to delve into the veracity of each specific function, but rather they have been studied in broad strokes.

**Search**

The search for concepts and the sample that the user receives have been studied in a very simple way.

**Watchlist**

The functionality of adding content to the watch later list, so that it appears there, has been studied. Everything from a general and basic approach

**Ratings**

This functionality studies the creation and deletion of content ratings. 

Once again, the approach is very general and the aim is to show a basic use of the tools and a best practice approach.

## Status 

🛫 Finished 🛬

## Folder structure 

IMDB

      ├── .gitignore
      
      ├── [cypress]
          ├── constants.js
         
          ├── [downloads]
          
          ├── [features]
              ├── ratings.feature
              ├── search.feature
              └── watchlist.feature
              
          ├── [fixtures]
              └── example.json
              
          ├── [pages]
              ├── login.js
              ├── main_page.js
              ├── ratings.js
              └── watchlist.js
              
          ├── [plugins]
              └── index.js
              
          ├── [screenshots]
           
              
          └── [support]
              ├── commands.js
              ├── e2e.js
              └── [step_definitions]
                  ├── ratings.js
                  ├── search.js
                  └── watchlist.js
                  
      ├── cypress.config.js
     
      ├── package.json
      └── README.md


# Project access

Instructions for requirements, installation, and guided project execution

## Important

You need to have an account in [IMDB](https://www.imdb.com/) and configure your credentials at the **Cypress.config.js** file. You will learn how in requirements section.

## Requirements

- Environment (OS): macOS 10.15 and above, Linux Ubuntu 20.04 and above, Windows 10 and above (64-bit only). (Used: Windows 11 v23H2)
- Compatible Browsers: Google Chrome v125 / Edge v125 / Electron v118 / Firefox v126
- Runtime Environment: Node 18 or higher (Used in the project: Node.js v18.18 + NPM 10.2.1), Java 8 minimum (1.8.0)
- Valid credentials at IMDB page

# Installation and Execution

Clone the repository:

    git clone https://github.com/aseoaneo23/IMDb.git

Navigate to the project folder in the command line, enter the "IMDB" directory, and run:


    npm install


This will install Cypress and other supporting tools.

To add your credentials, go to **Cypress.config.js** file and replace with your credentials like this:

    env: {
        VALID_USER: 'your email',
        VALID_PASSWORD: 'your password'      
        }

This step is very important because without it the tests cannot be executed correctly.

To run the tests, execute:

    npx cypress open


# FAQs

- **I get an error when running tests at login because it asks for human verification**

    - **Solution**: Sometimes, due to the concurrence of IMDB logins in the same account, we see a human verification, which causes the tests to fail.
     To solve this problem we must access IMDB through our browser, log in and manually complete the verification. 
     In this way the Cookies will be stored for a while and the tests will work correctly

    ----
- **I get an error when runing tests because failed login**

    - **Solution**: First check is that you have done the essential step of changing cypress.config.js. If you haven't done it, look at it in this [section](#installation-and-execution)
If the above has been done, verify that you can log in to your browser normally and that the credentials match.

- **Errors with content: No content to delete, no content added..**

    - **Solution**: Due to the approach that has been given to this practice, there are errors that have not been handled. 
    Some of the errors that can happen are that in the course of a failed execution, the addition or deletion of some content, whether it is a rating or watch later list, the test fails but the element has been deleted or added.

        In this case, the next execution will be failed, since there are things already in the list or there are none.

        The solution is to have the IMDB account status neutral, that is, make sure that there is nothing added to the watch later list, nor any rating made.

        The problem this entails is understandable, but as has already been said this is a very simple example. Possible substantial improvements are not ruled out.