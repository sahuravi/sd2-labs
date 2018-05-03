const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require('fs');
const routes = require('./server/routes');

app.use(express.static(__dirname + '/dist'));

app.use('/api', routes());

app.listen(process.env.PORT || 9000, () => {
    console.log(`Application running on port: ${process.env.PORT || 9000}`);
});

io.on('connection', function (socket) {
    fs.watch('./server/data/order.js', { persistent: true }, (event, fileName) => {
        if (event === 'change') {
            fs.readFile(`./server/data/${fileName}`, 'utf8', (error, fileData) => {
                if (error) {
                    socket.emit('error-message', { message: error.message });
                } else {
                    let lineArray = fileData.split('\n');
                    let newArray = lineArray.slice(lineArray.length - lastLineNumbers);
                    // filesData[fileName] = newArray;
                    newArray.unshift(fileName);
                    socket.emit('file-change', newArray);
                }
            });
        }
    });
});

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
}