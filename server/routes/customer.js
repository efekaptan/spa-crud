const express = require('express');
const database = require('../database');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const pageIndex = req.query.pageIndex || 1;
        const pageSize = req.query.pageSize || 10;

        const customers = await database.all('SELECT * FROM CUSTOMER ORDER BY id DESC LIMIT ?,?', ((pageIndex - 1) * pageSize), pageSize);
        const totalCount = await database.get('SELECT COUNT(*) as "Count" FROM CUSTOMER');

        res.send({
            data: customers,
            totalCount: totalCount.Count
        });
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const customer = await database.get('SELECT * FROM CUSTOMER WHERE id = ?', req.params.id);
        res.send(customer);
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const customerRequest = req.body;
        const result = await database.run('INSERT INTO CUSTOMER(firstName, lastName, birthday, gender, lastContact, customerLifetimeValue) VALUES(?,?,?,?,?,?)',
            customerRequest.firstName, customerRequest.lastName, customerRequest.birthday, customerRequest.gender, customerRequest.lastContact, customerRequest.customerLifetimeValue);
        res.send({
            lastId: result.stmt.lastID
        });
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const customerRequest = req.body;
        const result = await database.run('UPDATE TOP(1) CUSTOMER SET firstName = ?, lastName = ?, birthday = ?, gender = ?, lastContact = ?,customerLifetimeValue = ? where id = ?',
            customerRequest.firstName, customerRequest.lastName, customerRequest.birthday, customerRequest.gender, customerRequest.lastContact, customerRequest.customerLifetimeValue, req.params.id);
        res.send({
            changes: result.stmt.changes
        });
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const result = await database.run('DELETE TOP(1) FROM CUSTOMER WHERE id = ?', req.params.id);
        res.send({
            lastID: result.stmt.lastID,
            changes: result.stmt.changes
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;