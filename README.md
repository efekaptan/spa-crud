# SPA-CRUD
A single page application that Create/Read/Update/Delete customer data. Client-side project uses [CoreUI](https://github.com/mrholek/CoreUI-Free-Bootstrap-Admin-Template) admin template.

## [Visit Demo](https://spa-crud.herokuapp.com/)

## Getting Started

- `git clone https://github.com/efekaptan/spa-crud.git`
- `npm run postinsall`
- `npm run install`
- `npm run start-dev`

Migration script inserts demo data in database for test usage. In order to reset the database to initial state, just delete `database.sqlite` file. 

## To run tests in client project

- `cd client`
- `cd npm run test`

## Deploy on Heroku

Root folder package.json is configured for Heroku deployment. To deploy on Heroku, execute these commands:

- `heroku login`
- `heroku git:clone -a ##Your Heroku Project Name##`
- `git push heroku`

## Overview of libraries

 - `sqlite` - sqlite was chosen as data source because it is fast, easy and suitable to deploy on Heroku.

 - `express` - rest api implemented using Express Nodejs framework

 - `redux` + `redux-thunk` - state management library

 - `jest` - client test framework
