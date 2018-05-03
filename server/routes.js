const express = require('express');
const router = express.Router();
const orderController = require('./controllers/order.controller');

module.exports = function () {
    router.get('/orders-data', orderController.getOrders);

    router.all('/', function (req, res) {
        console.log(req.baseUrl);
    })
    return router;
}