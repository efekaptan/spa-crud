const express = require('express');
const bodyParser = require('body-parser');
const db = require('sqlite');
const Promise = require('bluebird');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const router = express.Router();
router.use('/api', routes);
app.use(router);

app.use(express.static(path.join(__dirname, '/../client/build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/../client/build', 'index.html'));
});

const port = process.env.PORT || 5000;

Promise.resolve()
    // First, try to open the database
    .then(() => db.open('./database.sqlite', { Promise }))
    // Update db schema to the latest version using SQL-based migrations
    .then(() => db.migrate({ force: 'last' }))
    // Display error message if something went wrong
    .catch((err) => console.error(err.stack))
    // Finally, launch the Node.js app
    .finally(() => {
        app.listen(port);
        console.log('server is running on port:' + port);
    });