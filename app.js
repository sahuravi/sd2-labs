const express = require('express');
const app = express();

var server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || '3000';

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || port, () => {
    console.log(`Application running on port: ${process.env.PORT || port}`);
});


io.on('connection', (socket) => {
    console.log("Connected to Socket!!" + socket.id);
})