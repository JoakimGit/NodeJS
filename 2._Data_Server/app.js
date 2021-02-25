const express = require("express");
const app = express();

app.use(express.json());

app.get("/querystring", (req, res) => {      
    res.send({ query: req.query });
});

app.get("/pathvariable/:message/:title", (req, res) => {
    res.send({ 
        message: req.params.message,
        title: req.params.title,
    });
});

app.post("/whatever", (req, res) => {
    console.log(req.body);
    res.send({ body: req.body });
});

app.get("/dateandname", (req, res) => {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const date = new Date();
    const name = req.query.name;
    const day = days[date.getDay()];
    res.send({"message": "Hello " + name + ", today is " + day});
});

app.listen(8080);
console.log("Listening...");