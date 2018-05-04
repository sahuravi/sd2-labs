const fs = require('fs');
const config = require('../config');

module.exports.getOrders = async function (req, res) {

    fs.readFile(`${config.server}/data/orders.js`, 'utf8', (err, fileData) => {
        if (err) {
            res.send(err.message);
        } else {
            res.send(JSON.parse(fileData));
        }
    });
}
