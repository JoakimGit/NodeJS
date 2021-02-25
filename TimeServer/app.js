const app = require("express")();


app.get("/time", (req, res) => {
    const currentDate = new Date();
    res.send({"time": currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds()});
});

app.get("/date", (req, res) => {
    const currentDate = new Date();
    res.send({"date": currentDate.getDate()});
});

app.get("/month", (req, res) => {
    const currentDate = new Date();
    res.send({"month": currentDate.getMonth()+1});
});

app.listen(8080);
console.log("Listening...")