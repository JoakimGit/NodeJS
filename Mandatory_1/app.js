const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/basics", (req, res) => {
    res.sendFile(__dirname + "/views/basics.html");
});

app.get("/restapi", (req, res) => {
    res.sendFile(__dirname + "/views/restapi.html");
});

app.get("/html-and-static", (req, res) => {
    res.sendFile(__dirname + "/views/html-static.html");
});

app.get("/tools-and-commands", (req, res) => {
    res.sendFile(__dirname + "/views/tools-commands.html");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Listening to server at port", Number(PORT));
});