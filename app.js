const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require('fs');
const path = require('path');
const routes = require('./server/routes');

const config = require('./server/config');

app.use(express.static(__dirname + '/dist'));

app.use('/api', routes());


io.on('connection', function (socket) {
    console.log("Connected...");
    let filePath = path.join(config.server, 'data', 'orders.js');
    try {
        fs.watch(filePath, { persistent: true }, (event, fileName) => {
            if (event === 'change') {
                try {
                    fs.readFile(filePath, 'utf8', (error, fileData) => {
                        if (error) {
                            socket.emit('error-message', { message: error.message });
                        } else {
                            socket.emit('file-change', fileData);
                        }
                    });
                } catch (error) {
                    console.log(error.stack);
                }
            }
        });
    } catch (error) {
        console.log(error.stack);
    }
});
/* 
function readFileAsynchronously(rootFolder, fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(`${rootFolder}/${fileName}`, 'utf8', (err, file) => {
            if (err) {
                reject(err.message);
            } else {
                let lineArray = file.split('\n');
                let newArray = lineArray.slice(lineArray.length - lastLineNumbers);
                newArray.unshift(fileName);
                // let str = `${newArray.join('\n')}`;
                resolve(newArray);
            }
        });
    });
} */

server.listen(process.env.PORT || 9000, () => {
    console.log(`Application running on port: ${process.env.PORT || 9000}`);
});
