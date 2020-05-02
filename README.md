# Watch What Where When
[travis badge](https://img.shields.io/travis/Brian-Fairbanks/TV-Tracker)

## Description
<img src="https://raw.githubusercontent.com/Brian-Fairbanks/TV-Tracker/master/public/favicon.ico" align="right" alt="W4 Logo by Brian Fairbanks" width="150" height="150">
W4 (Watch What Where When) Is a Movie and tv streaming locator and watchlist storing service.

- Users can search movie and TV show titles to see information about them and what services they can watch them on. 
- Registered users can save movies and tv shows for future reference, and view them all on their members page.
- In future builds, The user profile page will tell registered users what movies and shows were released recently


## Table of Contents
* [License](#license)
* [Scripts](#Scripts)
* [Dependencies](#dependencies)
* [Credits](#contributing)
* [Testing](#tests)
* [Questions](#questions)
* [Demo](#demo)

## License

<details open>
<summary>ICS License</summary>
<br>
Copyright 2020 Brian Fairbanks

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
</details>


## Scripts
### Install
    npm install
### Run (production)
    npm start
    npx nodemon server.js
### Run (dev)
    npm run watch
### Tests (includes linting)
    npm test
### Linting by itself (only detects errors)
    npm run lint
### Autofix linting errors where pssible (Note: this will not necessarily fix all of them)
    npm run fix

## Dependencies
### Extenal APIs
* [UTelly](https://www.utelly.com/)
* [OMDB](http://www.omdbapi.com/)
### Node Extensions
#### General
* "axios": "^0.19.2",
* "bcryptjs": "2.4.3",
* "dotenv": "^8.2.0",
* "express": "^4.17.0",
* "express-session": "^1.16.1",
* "mysql2": "^1.6.5",
* "passport": "^0.4.0",
* "passport-local": "^1.0.0",
* "sequelize": "^5.8.6",
* "tailwindcss": "^1.3.5"

#### Dev
* "chai": "^4.1.2",
* "chai-http": "^4.0.0",
* "cross-env": "^5.2.0",
* "eslint": "^6.8.0",
* "eslint-config-prettier": "^2.9.0",
* "eslint-plugin-prettier": "^2.6.2",
* "mocha": "^5.2.0",
* "nodemon": "^2.0.3"


## Verfification
### Travis CI
Continuous Integration checks using Travis CI

### Protected Master
The master branch is protected, and requires at least one peer review to merge into.


## Tests
Manually tested.  No additinal frameworks used.


## Contributing
Members Contributing on this project:
* [Brian Fairbanks](https://github.com/Brian-Fairbanks)
    * Project Manager
    * Database creation/management
    * API Backends
    * Icons/Images
    * Documentation
    * Aditional Styling
* [Ryan Gautier](https://github.com/ryangautier1)
    * CSS Styling
    * General Page Layout
    * Search Bar Creation
    * Search Results Front End Scripting
    * User Page Front End Scripting
* [Jumi Gore](https://github.com/JumiGore)
    * Account Specific nav bar options
    * Search bar Creationg
* [Jordan Roenitz](https://github.com/jroenitz)
    * Home Page Layout
* [Khanh Hoang  ](https://github.com/KHANHHOANG1988)
    * Account Verification and Login error handling


## Questions
If you have any questions about this application, feel free to reach out to one of our members below:

<img src="https://avatars0.githubusercontent.com/u/59707181?v=4" height="32" width="32"> | brian.k.fairbanks@gmail.com


## Demo
Deployed to Heroku:
* Staging: [tvtrackerbkf](https://tvtrackerbkf.herokuapp.com/)
* Production: [wfourbkf](https://wfourbkf.herokuapp.com/)

