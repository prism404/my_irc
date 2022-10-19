const express = require("express");
const cors = require('cors');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});
require("dotenv").config();

mongoose.connect(process.env.MONGO_DB, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => {
    console.log("Connected to the database !")
}).catch((err) => {
    console.log(err.message);
})

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
io.on('connection', (socket) => {
    console.log(`${socket.id} is connected`);
//     socket.emit('message', 'Welcome to Slide Chat !');

//     // Broadcast when an user enter a room
//     socket.broadcast.emit('message', 'A user has joined the chat');

//     // Runs when an user leave the room
    socket.on('disconnect', () => {
        console.log('A user has left the chat : ', socket.id);
    });
});



server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
