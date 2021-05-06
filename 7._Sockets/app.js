const express = require("express");
const app = express();

const server = require("http").createServer(app);

const io = require("socket.io")(server);

io.on("connection", (socket) => {
    socket.on("colorSelected", (data) => {
        // Updates all
        io.emit("changeColor", data);
        // Updates all except self
        //socket.broadcast.emit("changeColor", data);
        // Updates self
        //socket.emit("changeColor", data);
    })
    console.log("A socket connection", socket.id);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/colors.html');
});

server.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port ", 8080);
});