const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome/welcome.html");
});

app.get("/dragons", (req, res) => {
    res.sendFile(__dirname + "/public/dragons/dragons.html");
});

app.get("/potato", (req, res) => {
    if (req.query.value === "spud") {
        return res.send({ type: "petite potato" });
    }
    res.send({ lifePhilosophy: "My life is potato. I have potato blood in my veins."});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Listening to server at port", Number(PORT));
});