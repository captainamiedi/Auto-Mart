# Auto-Mart
# Auto-Mart

[![Build Status](https://travis-ci.org/captainamiedi/Auto-Mart.svg?branch=develop)](https://travis-ci.org/captainamiedi/Auto-Mart)

[![Coverage Status](https://coveralls.io/repos/github/captainamiedi/Auto-Mart/badge.svg?branch=develop)](https://coveralls.io/github/captainamiedi/Auto-Mart?branch=develop)

[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/captainamiedi/Auto-Mart/maintainability)

Auto-Mart is an app for users to buy and sell cars from the comfort of their homes and offices.

## Table of Content 
1. [Built With](#built-with)
2. [Application Features](#application-features)
3. [How to use](#how-to-use)
4. [Author](#author)
5. [License](#license)

## Built With
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) & [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
* [NodeJS](https://nodejs.org/en/)
* [Express](https://expressjs.com/)


### Deployment
Ride-My-Way UI is hosted on gh-pages while the app is hosted on Heroku
* [Github Page](https://captainamiedi.github.io/Auto-Mart/UI/html/index.html)
* [Pivotal Tracker](https://www.pivotaltracker.com/n/projects/2346197)


## How to use
### Prerequisite
To clone and run this application, you'll need [git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/download/)(which comes with [npm](https://www.npmjs.com/)) installed on you computer.

## API ENDPOINT
Endpoint | Functionality
-------- | -------------
POST /signup | Register a User
POST  /login | Login a Users
POST /order | create purchase order
POST /car | create car ADs
PATCH /order/:id/price | update purchase price when status is pending
PATCH /car/:id/status | update car status
PATCH /car/:id/price | update car price
GET /car/:id | get a specific car
GET /cars | view all available cars with price range
DELETE /cars/:id | remove a car 
GET /all | view all cars 

## How to use
### Prerequisite
To clone and run this application, you'll need [git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/download/)(which comes with [npm](https://www.npmjs.com/)) installed on you computer.

### Installing
From your command line
```
# Clone this repository
$ git clone https://github.com/captainamiedi/Auto-Mart.git

# Go into the repository directory
$ cd Auto-Mart

# Install dependencies
$ npm install

# run the app
$ npm start
```

### Running Test
* Navigate to the project root directory
* After installation, run `npm test`

## Author
Bright  Eloghene Amidiagbe

## License
MIT