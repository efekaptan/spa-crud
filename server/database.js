const database = require('sqlite');

database.open('./database.sqlite');

module.exports = database;