const fs = require('fs');

module.exports.getOrders = async function(req, res) {
    // your code
    try {
        let fileData = await fs.readFile(`${rootFolder}/${fileName}`, 'utf8');
        res.send(JSON.parse(fileData));    
    } catch (error) {
        res.send(error.message);
    }
    /* fs.readFile(`${rootFolder}/${fileName}`, 'utf8', (err, file) => {
        if (err) {
            reject(err.message);
        } else {
            res.send(JSON.parse(file))
        }
    }); */
}