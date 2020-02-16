const app = require('./app');
const http = require('http');
const initateSocketio = require('./socketio');

const port = process.env.PORT;

const server = http.createServer(app);
initateSocketio(server);

server.listen(port, () => {
    console.log("Server connected, port:", port);
});