const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit('newEmail', {
    //     from: 'userOne@example.com',
    //     text: "What up fam?!!",
    //     createdAt: 123
    // });

    socket.emit('newMessage', {
        from: 'userOne@example.com',
        text: "Not much. What's ha-e-ninn?",
        createdAt: new Date()
    });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });

    socket.on('createMessage', (newMessage) => {
        console.log('createMessage', newMessage);
    });

    socket.on('disconnect', () => {
        console.log('User was disconected');
    });
});

server.listen(port, () => {
    console.log(`Server is up and running on port ${port}.`);
});