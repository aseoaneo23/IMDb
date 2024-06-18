![Static Badge](https://img.shields.io/badge/IMDB-%20orange)
 ![Badge en Desarollo](https://img.shields.io/badge/STATUS-FINALIZADO-green) 
 ![Static Badge](https://img.shields.io/badge/NPM-v10.2.1-lightblue) 
 ![Static Badge](https://img.shields.io/badge/Node-v18.18-lightgreen)
 ![Static Badge](https://img.shields.io/badge/Cypress-v13.8.1-purple)
![Static Badge](https://img.shields.io/badge/Cucumber-v4.3.1-darkgreen)


# ℹ️ IMDb Automation 🎥

This is a repository to share my IMDb Automation. It contains a web automation with most important features.

### Description 📖
Automation of IMDb, based on most important features like search content, add to watch list or rate a contetnt.
Page Object model is used in spite of what Cypress site says, it increases readability of code and is much easier to manage.

# Status 

🛫 Finished 🛬

# Folder structure 

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

## Requirements
- Environment (OS): macOS 10.15 and above, Linux Ubuntu 20.04 and above, Windows 10 and above (64-bit only). (Used: Windows 11 v23H2)
- Compatible Browsers: Google Chrome v125 / Edge v125 / Electron v118 / Firefox v126
- Runtime Environment: Node 18 or higher (Used in the project: Node.js v18.18 + NPM 10.2.1), Java 8 minimum (1.8.0)
- Installation and Execution:

Clone the repository:

    git clone https://github.com/aseoaneo23/IMDb.git

Navigate to the project folder in the command line, enter the "IMDB" directory, and run:


    npm install


This will install Cypress and other supporting tools.

To run the tests, execute:

    npx cypress open
