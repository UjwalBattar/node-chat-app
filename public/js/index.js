var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    // socket.emit('createEmail', {
    //     from: "userEleventyOne@example.com",
    //     text: "Yo! Whats good?!!!"
    // });

    socket.emit('createMessage', {
        from: 'userEleventyOne@example.com',
        text: 'You know, jus marinatin.'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

// socket.on('newEmail', function (email) {
//     console.log('New email', email);
// });

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
});