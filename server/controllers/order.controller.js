const fs = require('fs');
const config = require('../config');

module.exports.getOrders = async function (req, res) {

    let fileData = await fs.readFile(`${config.server}/data/orders.js`, 'utf8', (err, fileData) => {
        if (err) {
            res.send(err.message);
        } else {
            res.send(JSON.parse(fileData));
        }
    });
    /* fs.readFile(`${rootFolder}/${fileName}`, 'utf8', (err, file) => {
        if (err) {
            reject(err.message);
        } else {
            res.send(JSON.parse(file))
        }
    }); */
}