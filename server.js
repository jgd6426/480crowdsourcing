const express = require('express');
const app = express();

const server = app.listen(process.env.PORT || process.env.NODE_PORT || 3000, listen);
const io = require('socket.io')(server);

function listen() {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Example app listening at http://${host}:${port}`)
}

app.use(express.static('client'));

io.sockets.on('connection', function(socket) {
    // new connection
    console.log(`We have a new client: ${socket.id}`);

    socket.on('mouse', function(data) {
        // console.log(`Received: 'mouse' ${data.x} ${data.y}`);

        socket.broadcast.emit('mouse', data);
    });

    socket.on('disconnect', function() {
        console.log('Client has disconnected');
    });
});


