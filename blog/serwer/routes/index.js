const express = require('express');
const route = express.Router();

route.get('./', function (req, res, next) {
    res.send('now')
});

module.exports = route;